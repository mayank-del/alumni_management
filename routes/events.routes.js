const express = require('express');
const { createEvent } = require('../controllers/event.controllers');
const { checkAlumni, checkAdmin, } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/create', checkAdmin, createEvent);

module.exports = router;