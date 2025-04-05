const mongoose = require('mongoose');
const config = require('./config');

// Mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;