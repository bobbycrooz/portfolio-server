"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RankDB = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRankSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const RankDB = _mongoose.default.model("Rank", userRankSchema);

exports.RankDB = RankDB;