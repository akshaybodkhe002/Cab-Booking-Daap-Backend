const mongoose = require("mongoose");

const driverSechma = new mongoose.Schema({
    account: String,
    name: String,
    email: String,
    contact: String,
    carNo: String,
    noOfSeats: String,
    rating: String,
    type: String,

})

module.exports = mongoose.model("driver", driverSechma);