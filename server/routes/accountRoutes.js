const express = require('express');
const router = express.Router();
const Account = require('../db/accountSchema');
const { authenticateJwt } = require('../middleware/authuser');
const mongoose = require('mongoose');

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
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userid: req.id }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userid: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userid: req.id }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userid: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;