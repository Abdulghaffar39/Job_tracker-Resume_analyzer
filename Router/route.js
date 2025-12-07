const express = require("express");

const { signUp, login, home } = require("../Controller/auth");
const authrization = require("../Middleware/authentication");
const { upload, saveResume } = require("../Controller/gemini");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/home", authrization, home);
router.post("/upload", upload);
router.post("/saveResume", saveResume);
router.get("/saveResume", saveResume);

module.exports = router