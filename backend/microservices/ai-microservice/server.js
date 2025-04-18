// Import shared configuration
const configureExpress = require('../../config/express');
const connectDB = require('../../config/mongoose');
const config = require('../../config/config');

// Create Express app
const app = configureExpress();

// Connect to database
connectDB();

// Import routes
//const userAuthRoutes = require('./routes');

// Mount routes
//app.use('/api/auth', userAuthRoutes);

// Start server
const PORT = config.services.ai;
app.listen(PORT, () => {
  console.log(`AI Service running on port ${PORT}`);
});