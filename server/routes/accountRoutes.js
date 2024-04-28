const express = require('express');
const router = express.Router();
const Account = require('../db/accountSchema');
const Transaction = require('../db/transactionSchema');
const { authenticateJwt } = require('../middleware/authuser');
const mongoose = require('mongoose');
const User = require('../db/userSchema');

router.get("/balance", authenticateJwt, async (req, res) => {
    const account = await Account.findOne({
        userid: req.id
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authenticateJwt, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to,pin } = req.body;
    

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userid: req.id }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const nunmberp = parseInt(to);
    const uertopay = await User.findOne({mobilenumber:nunmberp}).session(session);
    //console.log(uertopay);
    const useridpay = uertopay._id;
    const toAccount = await Account.findOne({ userid: useridpay }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer

    if(pin == uertopay.pin){
        await Account.updateOne({ userid: req.id }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userid: useridpay }, { $inc: { balance: amount } }).session(session);
        // Commit the transaction
        await session.commitTransaction();
        const transaction = new Transaction({
            sender:req.id,
            receiver:useridpay,
            amount:amount
        });
        await transaction.save();
        res.json({
            message: "Transfer successful"
        });
    }
    else
    {
        res.json({
            message:"Invalid pin"
        });
    }
});

router.get("/transactions", authenticateJwt, async (req, res) => {
    const transactions = await Transaction.find({
        $or: [
            { sender: req.id },
            { receiver: req.id }
        ]
    }).populate('sender receiver', 'name email').sort({ createdAt: -1 });

    res.json(transactions);
});

module.exports = router;