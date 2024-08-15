const express = require('express');
const chatgptRoutes = require('./chatgptRoutes');
const claudeRoutes = require('./claudeRoutes');
const geminiRoutes = require('./geminiRoutes');
const router = express.Router();

router.use('/api', chatgptRoutes);
router.use('/api', claudeRoutes);
router.use('/api', geminiRoutes);

module.exports = router;