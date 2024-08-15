const { getClaudeResponse } = require('../services/anthropicService');

const claudeHandler = async (req, res) => {
  try {
    const { prompt } = req.body;
    const reply = await getClaudeResponse(prompt);
    res.json({ reply });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error communicating with Claude' });
  }
};

module.exports = { claudeHandler };
