const { admin, db } = require("./admin");

// Calling firebase verifyIdToken module to verify the token, decode the user details and passing them in the existing request.
module.exports = (request, response, next) => {
  let idToken;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = request.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return response.status(403).json({ error: "Unauthorized" });
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodeToken) => {
      request.user = decodeToken;
      return db
        .collection("users")
        .where("userId", "==", request.user.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      request.user.username = data.docs[0].data().username;
      request.user.imageUrl = data.docs[0].data(I).imageUrl;
      return next();
    })
    .catch((err) => {
      console.error("Error while verifying token", err);
      return response.status(403).json(err);
    });
};
