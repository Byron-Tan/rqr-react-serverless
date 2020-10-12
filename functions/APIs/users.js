const { admin, db } = require("../util/admin");
const config = require("../util/config");

const firebase = require("firebase");

firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require("../util/validators");

// Here we are using a firebase singInWithEmailAndPassword module to check if the user-submitted credentials are right.
// If they are then we send the token of that user else return a 403 error message
// Login
exports.loginUser = (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  };

  const { valid, errors } = validateLoginData(user);
  if (!valid) return response.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return response.json({ token });
    })
    .catch((error) => {
      console.error(error);
      return response
        .status(403)
        .json({ general: "wrong credentials, please try again" });
    });
};

// Wee validate our user data and we call the firebase function createUseerWithEmailAndPassword module to create a user,
//we then store the user credentials in the database.
exports.signUpUser = (request, response) => {
  const newUser = {
    username: request.body.username,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    dateOfBirth: request.body.dateOfBirth,
    phoneNumber: request.body.phoneNumber,
    password: request.body.password,
  };

  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) return response.status(400).json(errors);

  let token, userId;
  db.doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return response
          .status(400)
          .json({ username: "this username is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      id = userId;
      const userCredentials = {
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        dateOfBirth: newUser.dateOfBirth,
        phoneNumber: newUser.phoneNumber,
        createdAt: new Date().toISOString(),
        profileComplete: "false",
        role: 1,
        userId,
      };
      return db.doc(`/users/${newUser.username}`).set(userCredentials);
    })
    .then(() => {
      return response.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return response.status(400).json({ email: "Email already in use" });
      } else {
        return response
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};

// User profile image functions
deleteImage = (imageName) => {
  const bucket = admin.storage().bucket();
  const path = `${imageName}`;
  return bucket
    .file(path)
    .delete()
    .then(() => {
      return;
    })
    .catch((error) => {
      console.error(error);
      return;
    });
};

//using busboy to handle upload docs here https://github.com/mscdex/busboy#readme
// w3 schools on file system(fs) module https://www.w3schools.com/nodejs/nodejs_filesystem.asp
// mimetype https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
// Upload profile picture
exports.uploadProfilePhoto = (request, response) => {
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");
  const busboy = new BusBoy({ headers: request.headers });

  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== "image/png" && mimetype !== "image/jpeg") {
      return response.status(400).json({ error: "Wrong file type submited" });
    }
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    imageFileName = `${request.user.username}.${imageExtension}`;
    const filePath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filePath, mimetype };
    file.pipe(fs.createWriteStream(filePath));
  });
  deleteImage(imageFileName);
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filePath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${request.user.username}`).update({
          imageUrl,
        });
      })
      .then(() => {
        return response.json({ message: "Image uploaded successfully" });
      })
      .catch((error) => {
        console.error(error);
        return response.status(500).json({ error: error.code });
      });
  });
  busboy.end(request.rawBody);
};

exports.getUserDetails = (request, response) => {
  let userData = {};
  db.doc(`/users/${request.user.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.userCredentials = doc.data();
        return response.json(userData.userCredentials);
      }
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({ error: error.code });
    });
};

//Here we are using the firebase update method, this uses the same procedure request as get user details
// the only change is that we post body in the request and set the method as post
exports.updateUserDetails = (request, response) => {
  let document = db.collection("users").doc(`${request.user.username}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      return response.status(500).json({
        message: error,
      });
    });
};

exports.recoverUserPassword = (request, response) => {
  const email = request.body.email;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then()
    .catch(function (error) {
      console.error(error);
    });
};

exports.getAllUserDetails = (request, response) => {
  let allUserDetails = [];
  db.collection("users")
    .where("profileComplete", "==", "true")
    .get()
    .then(function (querySnapShot) {
      querySnapShot.forEach(function (doc) {
        allUserDetails.push(doc.data());
      });
      return response.status(200).json(allUserDetails);
    })
    .catch(function (error) {
      console.error("Error getting documents:", error);
    });
};
