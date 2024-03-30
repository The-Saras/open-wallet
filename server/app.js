const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());

app.use(cors());
const userRoutes = require("./routes/userAuths");
const accountRouter = require("./routes/accountRoutes");

app.use("/user", userRoutes);
app.use("/account", accountRouter);
const cnmg = require("./db");
cnmg();


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


