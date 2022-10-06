const models = require('../models');
const asynHandler = require('express-async-handler');


// @desc   Registers Alumni
// @route  POST /api/alumni/register
// @access Public
exports.registerAlumni = asynHandler(async (req, res) => {
    const {
        alumni_name,
        user_name,
        register_number,
        password,
        dob,
        gender,
        address,
        mobile_number,
        email_address,
        passout_year,
        company_name,
        qualification,
        designation
    } = req.body;

    const user = await models.User.create({
        alumni_name,
        user_name,
        register_number,
        password,
        dob,
        gender,
        address,
        mobile_number,
        email_address,
        passout_year,
        company_name,
        qualification,
        designation
    })
    res.status(201).json({
        message: "Registration Successful.",
        registerationDetails: user
    });
});

// @desc   GET all alumni
// @route  GET /api/alumni/
// @access Private
exports.getAllAlumni = asynHandler(async(req,res) => {
    const alumni = await  models.User.findAll();
    res.status(200).json(alumni);
})

