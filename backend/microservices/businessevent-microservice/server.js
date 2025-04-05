// Import shared configuration
const configureExpress = require('../../config/express');
const connectDB = require('../../config/mongoose');
const config = require('../../config/config');

// Create Express app
const app = configureExpress();

// Connect to database
connectDB();

// Import routes
//const businessEventRoutes = require('./routes');

// Mount routes
//app.use('/api/auth', businessEventRoutes);

// Start server
const PORT = config.services.businessevent;
app.listen(PORT, () => {
  console.log(`Business Event Service running on port ${PORT}`);
});