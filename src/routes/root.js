import express from "express";
const router = express.Router();

// get all questions
router.get("/", (req, res) => {
      res.render("index", { title: "Express" });
});



export default router;
