const models = require('../models');
const asynHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.createEvent = asynHandler(async (req, res) => {
    const {
        event_name,
        event_date,
        event_time,
        venue,
        event_desc
    } = req.body;

    const event = await models.Event.create({
        event_name,
        event_date,
        event_time,
        venue,
        event_desc
    })
    res.status(201).json({
        "Message": "Event Added",
        event:event
    });
});