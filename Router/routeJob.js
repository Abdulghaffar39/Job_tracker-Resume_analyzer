const express = require("express");
const { jobData, jobDataPost } = require("../Controller/jobFinder")


const router = express.Router();

router.post("/jobData", jobData);
router.get("/jobDataPost", jobDataPost);


module.exports = router