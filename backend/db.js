
const mongoose = require('mongoose');
const password = encodeURIComponent('BTLerf9moJ67u46k');

// Update the MongoDB connection URI with the correct format ${password}
const mongoURI = `mongodb+srv://chaitanyakalra7:${password}@bailreckonercluster.dfw6v.mongodb.net/?retryWrites=true&w=majority&appName=BailReckonerCluster`;

// Retry options
const maxRetries = 3; // Maximum number of retry attempts
const retryInterval = 5000; // Retry interval in milliseconds (e.g., 5 seconds)

let retryAttempts = 0; // Variable to track the number of retry attempts

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // ssl: true,  // Enable SSL
      
    });
    
    console.log('Connected to MongoDB');
    // You can use global.food_items and global.foodCategory here

  } catch (error) {
    // Check if the error is ECONNRESET
    if (error.code === 'ECONNRESET') {
      console.error('Connection reset by peer. Retrying connection...');

      // Check if maximum retry attempts exceeded
      if (retryAttempts < maxRetries) {
        // Increment retry attempts count
        retryAttempts++;

        console.log(`Retrying connection in ${retryInterval / 1000} seconds (Attempt ${retryAttempts}/${maxRetries})...`);

        // Retry connection after delay
        setTimeout(connectToMongoDB, retryInterval);
      } else {
        console.error('Maximum retry attempts exceeded. Unable to connect to MongoDB.');
      }
    } else {
      // For other errors, log the error and handle accordingly
      console.error('Error connecting to MongoDB:', error);
    }
  }
};

module.exports = connectToMongoDB;
