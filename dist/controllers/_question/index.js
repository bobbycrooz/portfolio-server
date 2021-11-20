"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResult = exports.getQuestions = void 0;
const question_1 = require("../../utils/question");
const questions_json_1 = __importDefault(require("../../resourses/_question/questions.json"));
const question_model_1 = require("../../DB/models/question.model");
// get all question controller
const getQuestions = (req, res, next) => {
    try {
        res.status(201).send(questions_json_1.default).end();
    }
    catch (error) { }
};
exports.getQuestions = getQuestions;
// send result
const sendResult = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newUser = {};
    try {
        const details = req.body;
        newUser["name"] = details.name;
        let result = (0, question_1.getResult)(details.answer);
        newUser["score"] = result;
        console.log(newUser);
        //     save score in db for user leaderboard
        const userScore = yield question_model_1.RankDB.create(Object.assign({}, newUser));
        const leaderboard = yield question_model_1.RankDB.find().select({ name: 1, _id: 0, score: 1 });
        const resData = { name: userScore.name, score: userScore.score, leaderboard };
        res.status(200).send(resData).end();
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.sendResult = sendResult;
