const models = require('../models');
const asynHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');


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


// @desc   Auth alumni & get token
// @route  POST /api/alumni/login
// @access Public

exports.authAlumni = asynHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email_address: email } });
    if (user && (await user.matchPassword(password))) {
            res.json({
                id:user.id,
                name:user.user_name,
                email: user.email_address,
                token: generateToken(user.id)
            })   
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})


// @desc   GET all alumni
// @route  GET /api/alumni/
// @access Private
exports.getAllAlumni = asynHandler(async (req, res) => {
    const alumni = await models.User.findAll();
    res.status(200).json(alumni);
});

