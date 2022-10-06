const express = require('express');
const { createJob } = require('../controllers/job.controllers');
const { checkAlumni, checkAdmin, } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/create', checkAdmin, createJob);

module.exports = router;