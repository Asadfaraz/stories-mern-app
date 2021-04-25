import express from "express";

const router = express.Router();

// getting all the posts
router.get("/", (req, res) => {
  res.send("This Works!!!");
});

export default router;
