const express = require('express');
const { claudeHandler } = require('../controllers/claudeController');

const router = express.Router();

router.post('/claude', claudeHandler);

module.exports = router;