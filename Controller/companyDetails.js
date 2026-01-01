const compDetai = require("../db/company")
const job = require("../db/jobs")


async function companyDetails(req, res) {

    try {

        const {
            company,
            fName,
            lName,
            number,
            jobTilte,
            jobLocation,
            jobType,
            jobPay,
            city,
            experience,
            skills,
            appliMethod,
            expiry, } = req.body;

        // const companyUser = {
        //     company,
        //     fName,
        //     lName,
        //     number,
        //     jobTilte,
        //     jobLocation,
        //     jobType,
        //     jobPay,
        //     city,
        //     experience,
        //     skills,
        //     appliMethod,
        //     expiry,
        // }

        const result = await new compDetai({
            company,
            fName,
            lName,
            number,
            jobTilte,
            jobLocation,
            jobType,
            jobPay,
            city,
            experience,
            skills,
            appliMethod,
            expiry,
        }).save();

        return res.send({

            result,
            status: 200,
            message: "🎉 Thank you! Your details have been submitted successfully"
        })

    }
    catch (error) {

        return res.send({

            status: 500,
            message: "Sorry! Server is not responding"
        })
    }

}

async function companiesData(req, res) {

    try {

        const companies = await compDetai.find();

        console.log(companies);


        res.status(200).send({
            success: true,
            data: companies
        });

    } catch (err) {

        res.status(500).send({ message: "Server Error" });
    }

};

module.exports = { companyDetails, companiesData }
