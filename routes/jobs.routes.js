const express = require('express');
const { createJob, deleteJob , getJob, getJobs, updateJob} = require('../controllers/job.controllers');
const { checkAlumni, checkAdmin, } = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/create', checkAdmin, createJob);

router.get('/', getJobs);

router.get('/:id', getJob);

router.put('/:id',checkAdmin, updateJob);

router.delete('/:id',checkAdmin, deleteJob);

module.exports = router;