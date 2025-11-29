const express = require("express");

const jobFind = require("../Controller/jobFinder")

const router = express.Router();

router.post("/jobFind", jobFind);

module.exports = router