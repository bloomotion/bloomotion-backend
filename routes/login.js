const express = require("express");
const router = express.Router();

const { handleLogin, verifyUser } = require("../controllers/loginController");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

router.post("/", handleLogin);
router.get("/verification", verifyAccessToken, verifyUser);

module.exports = router;
