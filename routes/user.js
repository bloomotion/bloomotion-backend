const express = require("express");
const router = express.Router();

const { getNewEmotion } = require("../controllers/userController");

router.post("/:id/emotion", getNewEmotion);

module.exports = router;
