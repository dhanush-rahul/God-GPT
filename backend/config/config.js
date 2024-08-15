const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = require(`.env.js`);

module.exports = config;