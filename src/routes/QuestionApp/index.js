import express from "express"
import {getQuestions,sendResult } from '../../controllers/_question'
const router = express.Router()

// get all questions 
router.get("/", getQuestions);

// get result and leaderboard details
router.post("/", sendResult)

export default router;