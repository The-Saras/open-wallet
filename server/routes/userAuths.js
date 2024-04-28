const express = require("express");
const router = express.Router();
const User = require("../db/userSchema");
const Account = require("../db/accountSchema");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET = "someranw582er0948doimje509345brigh"
const mongoose = require("mongoose");
const { authenticateJwt } = require("../middleware/authuser");
router.use(express.json());

router.post("/register",async(req,res)=>{
    try{
        const {name,email,password,mobilenumber,pin} = req.body;
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password,salt);

        let userExits = await User.findOne({email:email});
        if (userExits) {
            return res.status(400).json({ error: "Emial already in use" })
        }
        userExits = await User.create({
            name:name,
            email:email,
            password:secPass,
            mobilenumber:mobilenumber,
            pin:pin
        });
        const userid = userExits._id;

        //Create and Add a new account to the user
        await Account.create({
            userid,
            balance:10000
        })
        
        const authToken = jsonwebtoken.sign({id:userExits._id},SECRET);
        res.json({msg:`Account created sucessfully`,token:authToken})
    }
    catch(err){
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    try{
        const {email,password} = req.body;
        let userExits = await User.findOne({email});
        if(!userExits){
            return res.status(400).json({error:"Invalid credentials"})
        }
        const passwordcompare = bcrypt.compare(password,userExits.password);
        if(!passwordcompare){
            return res.status(400).json({error:"Invalid Password"});

        }
        const authToken = jsonwebtoken.sign({id:userExits._id},SECRET);
        res.json({token:authToken})

    }
    catch(error){
        console.log(error);
    }
});

router.get("/getuser",authenticateJwt,async(req,res)=>{
    try{
        
        const id = req.id;
        const user = await User.findById(id).select("-password");
        res.json(user);
    }
    catch(err){
        console.log(err);
    }
});
module.exports = router;