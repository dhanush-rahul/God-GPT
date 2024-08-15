const dotenv = require('dotenv');
dotenv.config();

const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getChatGptResponse = async (prompt) => {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0125',
    messages: [{ role: 'user', content: prompt }],
  });
  return chatCompletion.choices[0].message.content;
};

module.exports = { getChatGptResponse };