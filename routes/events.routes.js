const express = require('express');
const { createEvent, deleteEvent, getEvents, getEvent, updateEvent } = require('../controllers/event.controllers');
const { checkAdmin } = require('../middleware/authMiddleware')
const router = express.Router();

router.get('/', getEvents);

router.get('/:id', getEvent);

router.put('/:id', checkAdmin, updateEvent);

router.delete('/:id', checkAdmin, deleteEvent)

router.post('/create', checkAdmin, createEvent);

module.exports = router;