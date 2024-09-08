

const express = require('express');
const router = express.Router();
const Accused = require('../models/AccusedList2'); // Assuming your schema is in models folder

// Route to fetch crimes by Aadhaar card ID
router.get('/crimes/:aadhaarCardId', async (req, res) => {
  try {

    // console.log(req.params.aadhaarCardId);
    
    const { aadhaarCardId } = req.params;
    const accused = await Accused.findOne({ aadhaarCardId });

    if (!accused) {
      return res.status(404).json({ message: 'Accused not found' });
    }

    res.json({
        _id: accused._id,
        image: accused.image,
        prisonerNo: accused.prisonerNo,
        aadhaarCardId: accused.aadhaarCardId,
        name: accused.name,
        age: accused.age,
        yearsOfImprisonment: accused.yearsOfImprisonment,
        jurisdiction: accused.jurisdiction,
        crimes: accused.crimes,  // Fetch crimes
        ipcSections: accused.ipcSections,  // Fetch ipc sections
        suretyBonds: accused.suretyBonds,
        personalBonds: accused.personalBonds,
        fines: accused.fines,
        createdAt: accused.createdAt,
        updatedAt: accused.updatedAt,
      });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// POST route to add a new accused
router.post('/', async (req, res) => {
  try {
    const newAccused = new Accused(req.body);
    const savedAccused = await newAccused.save();
    res.status(201).json(savedAccused);
  } catch (error) {
    res.status(400).json({ message: 'Error creating accused', error });
  }
});



module.exports = router;
