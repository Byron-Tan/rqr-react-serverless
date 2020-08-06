const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

//Users
const { loginUser, signUpUser, uploadProfilePhoto } = require("./APIs/users");

app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);

//Goal Setting
const {
  getGoals,
  postNewWeeklyGoal,
  deleteGoal,
  editGoal,
} = require("./APIs/goals");

app.get("/goals", getGoals);
app.post("/goal", postNewWeeklyGoal);
app.delete("/goal/:goalID", deleteGoal);
app.put("/goal/:goalId", editGoal);

exports.api = functions.https.onRequest(app);
