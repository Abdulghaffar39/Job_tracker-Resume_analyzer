const express = require("express");

const companyDetail = require("../Controller/companyDetails")

const router = express.Router();

router.post("/company", companyDetail);


module.exports = router