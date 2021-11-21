"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _question = require("./question.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // get all questions


router.get("/", _question.getQuestions); // get result and leaderboard details

router.post("/", _question.sendResult);
var _default = router;
exports.default = _default;