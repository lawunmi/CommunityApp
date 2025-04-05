// Import shared configuration
const configureExpress = require('../../config/express');
const connectDB = require('../../config/mongoose');
const config = require('../../config/config');

// Create Express app
const app = configureExpress();

// Connect to database
connectDB();

// Import routes
const commEngRoutes = require('./routes');

// Mount routes
app.use('/api/auth', commEngRoutes);

// Start server
const PORT = config.services.communityengagement;
app.listen(PORT, () => {
  console.log(`Community Engagement Service running on port ${PORT}`);
});