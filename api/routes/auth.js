const express = require("express");
const router = express.Router();

const userController = require("../controllers/auth");
const authMiddleware = require("../middleware/auth");

router.post("/signup", userController.postSignup);
router.post("/login", userController.postLogin);
router.get("/me", authMiddleware.protect, userController.getMe);

module.exports = router;
