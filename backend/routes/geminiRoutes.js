const express = require('express');
const { geminiHandler } = require('../controllers/geminiController');

const router = express.Router();

router.post('/gemini', geminiHandler);

module.exports = router;