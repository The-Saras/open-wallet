const mongoose = require("mongoose")
const Db = "mongodb+srv://saras:saras@cluster0.uubaddl.mongodb.net/"
const cnmg = () => mongoose.connect(Db, {
    

}).then(() => {
    console.log("success");
}).catch((err) => {
    console.log(err);
})


module.exports = cnmg;