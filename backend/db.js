const mongoose = require('mongoose');
const password = encodeURIComponent('BTLerf9moJ67u46k');

// Update the MongoDB connection URI with the correct format ${password}
const mongoURI = `mongodb+srv://chaitanyakalra7:${password}@bailreckonercluster.dfw6v.mongodb.net/?retryWrites=true&w=majority&appName=BailReckonerCluster`;

// Retry options
const maxRetries = 3; // Maximum number of retry attempts
const retryInterval = 5000; // Retry interval in milliseconds (e.g., 5 seconds)

let retryAttempts = 0; // Variable to track the number of retry attempts
let isConnected = false; // Variable to track if connected successfully

const connectToMongoDB = async () => {
  if (isConnected) return; // Stop if already connected

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
    isConnected = true; // Mark connection as successful

  } catch (error) {
    if (error.code === 'ECONNRESET') {
      console.error('Connection reset by peer. Retrying connection...');

      if (retryAttempts < maxRetries) {
        retryAttempts++;
        console.log(`Retrying connection in ${retryInterval / 1000} seconds (Attempt ${retryAttempts}/${maxRetries})...`);
        setTimeout(connectToMongoDB, retryInterval);
      } else {
        console.error('Maximum retry attempts exceeded. Unable to connect to MongoDB.');
      }
    } else {
      console.error('Error connecting to MongoDB:', error);
    }
  }
};

// Exporting the connection function
module.exports = connectToMongoDB;
