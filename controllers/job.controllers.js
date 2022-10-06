const models = require('../models');
const asyncHandler = require('express-async-handler');


// @desc   Create job
// @route  POST /api/job/create
// @access Private
exports.createJob = asyncHandler(async (req, res) => {
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


// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.updateJob = asyncHandler(async (req, res) => {
    const {
        job_title,
        company,
        start_date,
        skills_req,
        expr_req,
        salary_given,
        jobpost_status
    } = req.body;

    const id = req.params.id;
    const updatedJob = {
        job_title,
        company,
        start_date,
        skills_req,
        expr_req,
        salary_given,
        jobpost_status
    };

    const update = await models.Job.update(updatedJob, { where: { id: id } });
    res.status(200).json({
        Message: "Job Succesfully updated",
        updatedJob: update
    })
})

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.getJobs = asyncHandler(async (req, res) => {
    const jobs = await models.Job.findAll();
    res.status(200).json(jobs);
})

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.getJob = asyncHandler(async (req, res) => {
    const job = await models.Job.findByPk(req.params.id);
    res.status(200).json(job);
})

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.deleteJob = asyncHandler(async (req, res) => {
    const job = await models.Job.destroy({ where: { id: req.params.id } });
    res.status(200).json({
        message: "Job Deleted",
        job: job
    });
})
