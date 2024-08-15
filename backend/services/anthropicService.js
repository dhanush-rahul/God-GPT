const dotenv = require('dotenv');
dotenv.config();

const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const getClaudeResponse = async (prompt) => {
  const msg = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20240620',
    max_tokens: 500,
    temperature: 0,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: prompt,
          },
        ],
      },
    ],
  });
  return msg.content[0];
};

module.exports = { getClaudeResponse };
