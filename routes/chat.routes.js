const express = require('express');
const { createMessage,getAllChats } = require('../controllers/chat.controllers');
const router = express.Router();

router.post('/chat',createMessage)

router.get('/:room',getAllChats)

module.exports=router