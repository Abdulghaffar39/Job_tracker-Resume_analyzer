const job = require("../db/jobs")

async function jobFind(req, res) {

    try {

        const { jobTilte, jobLocation, jobTimeline, jobType, jobPay, quantityInput, description } = req.body;

        const jobData = { jobTilte, jobLocation, jobTimeline, jobType, jobPay, quantityInput, description }

        const response = await new job(jobData).save();
        console.log(response);

        return res.send({

            response,
            status: 200,
            message: `🎉 Thank you, ! Your details have been submitted successfully`
        })



    }
    catch (error) {

        return res.send({

            status: 500,
            message: "Sorry! Server is not responding"
        })
    }

}

module.exports = jobFind
