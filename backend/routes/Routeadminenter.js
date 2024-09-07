// const mongoose = require('mongoose');
// const express = require('express');

// const router = express.Router();
// // const app = express();
// // app.use(express.json());
// const adminDetail = require('../models/Schemaadmin');


// router.post('/admin-enter' , async(req,res)=>{
//     try {

//         const adminLogin = new adminDetail({
//             id: req.body.id,
//             password:req.body.password,
//         })

//         await adminLogin.save();

//         console.log("data of admin added");
//         res.status(201).json({ message: "data of admin added successfully" });
        
//     } catch (error) {

//         console.log("the error is:" , error);
        
        
//     }
// });

// module.exports = router;
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const adminDetail = require('../models/Schemaadmin'); // Schema for Admin
const bcrypt = require('bcryptjs'); // To hash the password
const { body, validationResult } = require('express-validator'); // For validations

// Route for Admin User Creation
router.post(
  '/admin-enter',
  [
    body('id', 'ID is required').notEmpty(), // Ensure 'id' is not empty
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }), // Password validation
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }

    try {
      // Check if admin ID already exists
      const existingAdmin = await adminDetail.findOne({ id: req.body.id });
      if (existingAdmin) {
        return res.status(400).json({ success: false, message: 'Admin ID already exists' });
      }

      // Hash the password using bcrypt
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create a new admin user
      const adminLogin = new adminDetail({
        id: req.body.id,
        password: hashedPassword, // Store hashed password
      });

      // Save the admin user in the database
      await adminLogin.save();

      console.log('Admin data added');
      res.status(201).json({ success: true, message: 'Admin data added successfully' });
      
    } catch (error) {
      console.log('The error is:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
);

module.exports = router;
