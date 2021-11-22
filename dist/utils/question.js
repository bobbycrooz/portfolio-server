"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResult = void 0;

var _question = _interopRequireDefault(require("../question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getResult = details => {
  let score = []; // get all correct answers from question

  for (let i = 0; i < _question.default.length; i++) {
    let correctAns = _question.default[i].answerOptions.filter(item => item.isCorrect);

    score.push(correctAns[0].answer);
  } // compare user anser with correct ansers


  const userAnswers = details.map(item => item.answer);
  const resutl = score.reduce((acc, item) => acc + userAnswers.includes(item), 0);
  return resutl;
};

exports.getResult = getResult;