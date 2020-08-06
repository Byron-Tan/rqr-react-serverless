const { db } = require("../util/admin");

exports.getGoals = (request, response) => {
  db.collection("goals")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let goals = [];
      data.forEach((doc) => {
        goals.push({
          goalId: doc.id,
          weeklyGoal: doc.data().weeklyGoal,
          weeklyObjectives: doc.data().weeklyObjectives,
          weeklyReward: doc.data().weeklyReward,
        });
      });
      return response.json(goals);
    })
    .catch((err) => {
      console.log(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postNewWeeklyGoal = (request, response) => {
  if (request.body.weeklyGoal === "") {
    return response.status(400).json({ body: "Weekly Goal must not be empty" });
  }

  if (request.body.weeklyObjectives.objective1.trim() === "") {
    return response
      .status(400)
      .json({ body: "Weekly Objectives must not be empty" });
  }
  if (request.body.weeklyObjectives.objective2.trim() === "") {
    return response
      .status(400)
      .json({ body: "Weekly Objectives must not be empty" });
  }
  if (request.body.weeklyObjectives.objective3.trim() === "") {
    return response
      .status(400)
      .json({ body: "Weekly Objectives must not be empty" });
  }
  if (request.body.weeklyReward.trim() === "") {
    return response
      .status(400)
      .json({ body: "Weekly Reward Must not be empty" });
  }

  const newWeeklyGoal = {
    weeklyGoal: request.body.weeklyGoal,
    weeklyObjectives: request.body.weeklyObjectives,
    weeklyReward: request.body.weeklyReward,
    createdAt: new Date().toISOString(),
  };
  db.collection("goals")
    .add(newWeeklyGoal)
    .then((doc) => {
      const responseGoal = newWeeklyGoal;
      responseGoal.id = doc.id;
      return response.json(responseGoal);
    })
    .catch((err) => {
      response.status(500).json({ error: "something went wrong" });
      console.log(err);
    });
};

exports.deleteGoal = (request, response) => {
  const document = db.doc(`/goals/${request.params.goalID}`);
  document
    .get()
    .then((data) => {
      if (!data.exists) {
        return response.status(404).json({ error: doc });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: "Delete successfull" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editGoal = (request, response) => {
  if (request.body.goalId || request.body.createdAt) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db.collection("goals").doc(`${request.params.goalId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated successfully" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code,
      });
    });
};
