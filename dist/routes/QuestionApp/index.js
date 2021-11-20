"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _question_1 = require("../../controllers/_question");
const router = express_1.default.Router();
// get all questions 
router.get("/", _question_1.getQuestions);
// get result and leaderboard details
router.post("/", _question_1.sendResult);
exports.default = router;
