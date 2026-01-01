const mongoose = require("mongoose")

const { Schema } = mongoose

const company = new Schema({

    company: {

        type: String,
        required: true,
    },
    fName: {

        type: String,
        required: true,
    },
    lName: {

        type: String,
        required: true,
    },
    number: {

        type: String,
        required: true,
    },
    jobTilte: {

        type: String,
        required: true,
    },
    jobLocation: {

        type: String,
        required: true,
    },
    jobType: {

        type: String,
        required: true,
    },
    jobPay: {

        type: String,
        required: true,
    },
    city: {

        type: String,
        required: true,
    },
    experience: {

        type: String,
        required: true,
    },
    skills: {

        type: String,
        required: true,
    },
    appliMethod: {

        type: String,
        required: true,
    },
    expiry: {

        type: String,
        required: true,
    },

})


const compDetai = mongoose.model("companyDetails", company);
module.exports = compDetai;
