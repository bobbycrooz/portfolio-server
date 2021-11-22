"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendResult = exports.getQuestions = void 0;

var _question = require("../../utils/question");

var _question2 = _interopRequireDefault(require("../../question"));

var _question3 = require("./question.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// get all question controller
const getQuestions = (req, res, next) => {
  try {
    res.status(201).send(_question2.default).end();
  } catch (error) {}
}; // send result


exports.getQuestions = getQuestions;

const sendResult = async (req, res, next) => {
  let newUser = {};

  try {
    const details = req.body;
    newUser["name"] = details.name;
    let result = (0, _question.getResult)(details.answer);
    newUser["score"] = result;
    console.log(newUser); //     save score in db for user leaderboard

    const userScore = await _question3.RankDB.create(_objectSpread({}, newUser));
    const leaderboard = await _question3.RankDB.find().select({
      name: 1,
      _id: 0,
      score: 1
    });
    const resData = {
      name: userScore.name,
      score: userScore.score,
      leaderboard
    };
    res.status(200).send(resData).end();
  } catch (error) {
    console.log(error.message);
  }
};

exports.sendResult = sendResult;