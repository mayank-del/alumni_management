const models = require('../models');
const asynHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');


// @desc   Registers Alumni
// @route  POST /api/alumni/register
// @access Public
exports.registerAlumni = asynHandler(async (req, res) => {
    const {
        name,
        username,
        regno,
        password,
        dob,
        gender,
        address,
        mobile,
        email,
        passoutYear,
        company,
        qualification,
        designation,

    } = req.body;

    const user = await models.Alumni.create({
        name,
        username,
        regno,
        password,
        dob,
        gender,
        address,
        mobile,
        email,
        passoutYear,
        company,
        qualification,
        designation,
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
    const user = await models.Alumni.findOne({ where: { email: email } });
    if (user && (await user.matchPassword(password))) {
        res.json({
            id: user.id,
            name: user.username,
            email: user.email,
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
    const alumni = await models.Alumni.findAll();
    res.status(200).json(alumni);
});

