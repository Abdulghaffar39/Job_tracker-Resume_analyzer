const express = require("express");
const { companyDetails, companiesData } = require("../Controller/companyDetails");
const authrization = require("../Middleware/authentication");


const router = express.Router();

router.post("/company", authrization, companyDetails);
router.get("/companiesData", authrization, companiesData);


module.exports = router