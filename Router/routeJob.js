const express = require("express");
const { jobData, jobDataPost } = require("../Controller/jobFinder");
const authrization = require("../Middleware/authentication");


const router = express.Router();

router.post("/jobData", authrization, jobData);
router.get("/jobDataPost", authrization, jobDataPost);


module.exports = router