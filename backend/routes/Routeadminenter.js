const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
// const app = express();
// app.use(express.json());
const adminDetail = require('../models/Schemaadmin');


router.post('/admin-enter' , async(req,res)=>{
    try {

        const adminLogin = new adminDetail({
            id: req.body.id,
            password:req.password,
        })

        await adminLogin.save();

        console.log("data of admin added");
        res.status(201).json({ message: "data of admin added successfully" });
        
    } catch (error) {

        console.log("the error is:" , error);
        
        
    }
});

module.exports = router;