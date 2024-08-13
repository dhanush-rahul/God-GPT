const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const { Configuration, OpenAI } = require("openai");
const Anthropic = require('@anthropic-ai/sdk');
// import OpenAI from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });



app.post('/api/chatgpt', async (req, res) =>{
  const { prompt } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: [{"role": "user", "content": prompt}],
  });
  console.log(chatCompletion.choices[0].message);
  res.json({ reply: chatCompletion.choices[0].message.content });
})

app.post('/api/claude', async (req, res) => {
  const { prompt } = req.body;
  const anthropic = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  (async () => {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1000,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    });

    console.log(msg);
    res.json({reply: msg.content[0]})
  } catch (error) {
    console.error("Error:", error.message);
  }
})()
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;