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

// import OpenAI from 'openai';

console.log(process.env.OPENAI_API_KEY);
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

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;