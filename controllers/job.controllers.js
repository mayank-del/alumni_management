const models = require('../models');
const asynHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');

// @desc   Create job
// @route  POST /api/job/create
// @access Private
exports.createJob = asynHandler(async (req, res) => {
    const {
        job_title,
        company,
        start_date,
        skills_req,
        expr_req,
        salary_given,
        jobpost_status
    } = req.body;

    const job = await models.Job.create({
        job_title,
        company,
        start_date,
        skills_req,
        expr_req,
        salary_given,
        jobpost_status
    })
    res.status(201).json({
        "Message": "Job Added",
        job:job
    });
});