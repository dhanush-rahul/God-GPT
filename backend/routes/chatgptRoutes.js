const express = require('express');
const { chatGptHandler } = require('../controllers/chatgptController');

const router = express.Router();

router.post('/chatgpt', chatGptHandler);

module.exports = router;