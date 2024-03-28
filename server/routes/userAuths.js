const express = require("express");
const router = express.Router();
const User = require("../db/userSchema");

const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET = "someranw582er0948doimje509345brigh"
const mongoose = require("mongoose");
router.use(express.json());

router.post("/register",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password,salt);

        let userExits = await User.findOne({email:email});
        if (userExits) {
            return res.status(400).json({ error: "Emial already in use" })
        }
        userExits = await User.create({
            name:name,
            email:email,
            password:secPass
        });

        
        const authToken = jsonwebtoken.sign({id:userExits._id},SECRET);
        res.json({authToken})
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;