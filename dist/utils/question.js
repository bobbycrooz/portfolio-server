"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = void 0;
const questions_json_1 = __importDefault(require("../resourses/_question/questions.json"));
const getResult = (details) => {
    let score = [];
    // get all correct answers from question
    for (let i = 0; i < questions_json_1.default.length; i++) {
        let correctAns = questions_json_1.default[i].answerOptions.filter((item) => item.isCorrect);
        score.push(correctAns[0].answer);
    }
    // compare user anser with correct ansers
    const userAnswers = details.map((item) => item.answer);
    const resutl = score.reduce((acc, item) => acc + userAnswers.includes(item), 0);
    return resutl;
};
exports.getResult = getResult;
