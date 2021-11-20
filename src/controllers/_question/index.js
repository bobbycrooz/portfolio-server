import { getResult } from "../../utils/question";
import questions from "../../resourses/_question/questions.json";
import { RankDB } from "../../DB/models/question.model";
// get all question controller
export const getQuestions = (req, res, next) => {
     try {
          res.status(201).send(questions).end();
     } catch (error) {}
};

// send result
export const sendResult = async (req, res, next) => {
     let newUser = {};

     try {
          const details = req.body;
          newUser["name"] = details.name;

          let result = getResult(details.answer);
          newUser["score"] = result;
          console.log(newUser);

          //     save score in db for user leaderboard
          const userScore = await RankDB.create({ ...newUser });
          const leaderboard = await RankDB.find().select({ name: 1, _id: 0, score: 1 });

          const resData = { name: userScore.name, score: userScore.score, leaderboard };

          res.status(200).send(resData).end();
     } catch (error) {
          console.log(error.message);
     }
};
