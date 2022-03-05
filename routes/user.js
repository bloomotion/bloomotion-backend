const express = require("express");
const router = express.Router();

const { getEmotion, setNewEmotion } = require("../controllers/userController");

router.get("/:id/emotion", getEmotion);
router.post("/:id/emotion", setNewEmotion);

module.exports = router;
