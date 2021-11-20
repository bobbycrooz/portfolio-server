import questions from "../resourses/_question/questions.json";

export const getResult = (details) => {
     let score = [];
     // get all correct answers from question
     for (let i = 0; i < questions.length; i++) {
          let correctAns = questions[i].answerOptions.filter((item) => item.isCorrect);
          score.push(correctAns[0].answer);
     }

     // compare user anser with correct ansers
     const userAnswers = details.map((item) => item.answer);
     const resutl = score.reduce((acc, item) => acc + userAnswers.includes(item), 0);

     return resutl;
};
