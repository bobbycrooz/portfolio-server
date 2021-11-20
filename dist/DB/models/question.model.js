"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userRankSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});
exports.RankDB = mongoose_1.default.model("Rank", userRankSchema);
