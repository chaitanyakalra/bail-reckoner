const express = require('express');
const router = express.Router();
const Accused = require('../models/AccusedList'); // Ensure this path is correct

// Unified endpoint for CRUD operations
router.all('/', async (req, res) => {
  const { method } = req;

  // Log request method and query parameters for debugging
  console.log('Request received:', method, req.query);

  try {
    switch (method) {
      case 'POST':
        // Create a new accused record
        const newAccused = new Accused(req.body);
        await newAccused.save();
        return res.status(201).json({ success: true, data: newAccused });

      case 'GET':
        if (req.query.aadhaarCardId) {
          // Get a specific accused record by Aadhaar card ID
          const accused = await Accused.findOne({ aadhaarCardId: req.query.aadhaarCardId });
          if (!accused) {
            return res.status(404).json({ success: false, message: 'Accused not found' });
          }
          return res.status(200).json({ success: true, data: accused });
        } else {
          // Get all accused records
          const accusedList = await Accused.find();
          return res.status(200).json({ success: true, data: accusedList });
        }

      case 'PUT':
        if (req.query.aadhaarCardId) {
          // Update an accused record by Aadhaar card ID
          const updatedAccused = await Accused.findOneAndUpdate(
            { aadhaarCardId: req.query.aadhaarCardId },
            req.body,
            { new: true, runValidators: true }
          );
          if (!updatedAccused) {
            return res.status(404).json({ success: false, message: 'Accused not found' });
          }
          return res.status(200).json({ success: true, data: updatedAccused });
        } else {
          return res.status(400).json({ success: false, message: 'Aadhaar card ID is required' });
        }

      case 'DELETE':
        if (req.query.aadhaarCardId) {
          // Delete an accused record by Aadhaar card ID
          const deletedAccused = await Accused.findOneAndDelete({ aadhaarCardId: req.query.aadhaarCardId });
          if (!deletedAccused) {
            return res.status(404).json({ success: false, message: 'Accused not found' });
          }
          return res.status(200).json({ success: true, message: 'Accused deleted successfully' });
        } else {
          return res.status(400).json({ success: false, message: 'Aadhaar card ID is required' });
        }

      default:
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
