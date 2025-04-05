// Load environment variables from .env file
require('dotenv').config({ path: __dirname + '/env/.env' });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGODB_URI,
  geminiApiKey: process.env.GEMINI_API_KEY,
  
  // Service ports for inter-service communication
  services: {
    userauth: process.env.USER_AUTH_SERVICE_PORT || 4001,
    communityengagement: process.env.COMMUNITY_ENGAGEMENT_SERVICE_PORT || 4002,
    businessevent: process.env.BUSINESS_EVENT_SERVICE_PORT || 4003,
    ai: process.env.AI_SERVICE_PORT || 4004
  }
};

module.exports = config;