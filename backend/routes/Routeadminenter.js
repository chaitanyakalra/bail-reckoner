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
const adminDetail = require('../models/Schemaadmin'); // Admin schema
const bcrypt = require('bcryptjs'); // For password hashing
const { body, validationResult } = require('express-validator');

// Route for Admin Login or Registration
router.post(
  '/admin-enter',
  [
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }) // Password validation
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, errors: errors.array() });
      }

      // Find if the admin already exists
      const existingAdmin = await adminDetail.findOne({ id: req.body.id });

      if (existingAdmin) {
        // Admin exists, compare the provided password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, existingAdmin.password);

        if (!isPasswordCorrect) {
          return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Password matches, login the admin
        console.log('Admin logged in');
        return res.status(200).json({ success: true, message: 'Admin logged in' });
      }

      // If admin doesn't exist, create a new one
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newAdmin = new adminDetail({
        id: req.body.id,
        password: hashedPassword,
      });

      await newAdmin.save();

      console.log('New admin registered');
      res.status(201).json({ success: true, message: 'Admin registered successfully' });

    } catch (error) {
      console.log('The error is:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
);

module.exports = router;
