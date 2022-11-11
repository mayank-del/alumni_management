const models = require('../models');
const asyncHandler = require('express-async-handler');

exports.createMessage = asyncHandler(async (req, res) => {
    const {
        author,
        room,
        message
    } = req.body;

    const chat = await models.Chat.create({
        author,
        room,
        message
    })
    res.status(201).json({
        Message: "Message Added",
        event: chat
    });
});
exports.getAllChats = asyncHandler(async (req, res) => {
    const chat = await models.Chat.findAll({where:{room:req.params.room}});
    res.status(200).json(chat);
});