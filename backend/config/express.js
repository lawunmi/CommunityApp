const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');

// Express app setup function
const configureExpress = () => {
  const app = express();
  
  // Basic middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  
  // Base route for health check
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: process.env.SERVICE_NAME || 'api-gateway' });
  });
  
  return app;
};

module.exports = configureExpress;