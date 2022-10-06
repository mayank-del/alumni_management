const models = require('../models');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.createEvent = asyncHandler(async (req, res) => {
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
        Message: "Event Added",
        event: event
    });
});

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.updateEvent = asyncHandler(async (req, res) => {
    const {
        event_name,
        event_date,
        event_time,
        venue,
        event_desc
    } = req.body;

    const id = req.params.id;
    const updatedEvent = {
        event_name,
        event_date,
        event_time,
        venue,
        event_desc
    };

    const update = await models.Event.update(updatedEvent, { where: { id: id } });
    res.status(200).json({
        Message: "Succesfully updated",
        updatedEvent: update
    })
})

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.getEvents = asyncHandler(async (req, res) => {
    const events = await models.Event.findAll();
    res.status(200).json(events);
})

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.getEvent = asyncHandler(async (req, res) => {
    const event = await models.Event.findByPk(req.params.id);
    res.status(200).json(event);
})

// @desc   Add event
// @route  POST /api/event/create
// @access Private
exports.deleteEvent = asyncHandler(async (req, res) => {
    const event = await models.Event.destroy({ where: { id: req.params.id } });
    res.status(200).json({
        message: "Event Deleted",
        event: event
    });
})
