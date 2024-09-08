const mongoose = require('mongoose');
const { Schema } = mongoose;

const accusedSchema = new Schema({
  image: {
    type: String, // URL or path to the image file
    required: true
  },
  prisonerNo: {
    type: String,
    required: true,
    unique: true
  },
  aadhaarCardId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  yearsOfImprisonment: {
    type: Number,
    required: true
  },
  jurisdiction: {
    type: String,
    required: true
  },
  crimes: [{
    type: String
  }],

  ipcSections: [{
    section: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }],

  suretyBonds: {
    type: Number,
    default: 0
  },
  personalBonds: {
    type: Number,
    default: 0
  },
  fines: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create the model
const Accused = mongoose.model('AccusedList2', accusedSchema);
console.log("schema created");

module.exports = Accused;
