const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});