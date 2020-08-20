const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");
const cors = require("cors");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

app.use(cors());

//Users
const {
  loginUser,
  signUpUser,
  uploadProfilePhoto,
  getUserDetails,
  updateUserDetails,
} = require("./APIs/users");

app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);
app.get("/user", auth, getUserDetails);
app.post("/user", auth, updateUserDetails);

//Goal Setting
const {
  getGoals,
  getOneGoal,
  postNewWeeklyGoal,
  deleteGoal,
  editGoal,
} = require("./APIs/goals");

app.get("/goals", auth, getGoals);
app.get("/goal", auth, getOneGoal);
app.post("/goal", auth, postNewWeeklyGoal);
app.delete("/goal/:goalID", auth, deleteGoal);
app.put("/goal/:goalId", auth, editGoal);

exports.api = functions.https.onRequest(app);
