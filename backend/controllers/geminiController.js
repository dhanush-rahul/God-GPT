const { getGeminiResponse } = require('../services/geminiService')

const geminiHandler = async (req, res) => {
    try{
        const { prompt } = req.body;
        const reply = await getGeminiResponse(prompt);
        res.json(reply);
    }
    catch (error){
        console.error(error);
        res.status(500).json({ error: 'Error communicating with Gemini' });
    }
};

module.exports = { geminiHandler };