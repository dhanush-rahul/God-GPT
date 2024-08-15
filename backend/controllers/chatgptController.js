const { getChatGptResponse } = require('../services/openaiService');

const chatGptHandler = async (req, res) => {
  try {
    const { prompt } = req.body;
    const reply = await getChatGptResponse(prompt);
    res.json({ reply });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
};

module.exports = { chatGptHandler };