"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connect = async () => {
  try {
    await _mongoose.default.connect(process.env.DBURL, {
      useNewUrlParser: true
    }, (err, db) => {
      console.log(`database connected successfully`);
    });
  } catch (error) {}
};

exports.connect = connect;