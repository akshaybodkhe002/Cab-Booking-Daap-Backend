const mongoose = require("mongoose");

const userSechma = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    address: String,
    password: String
})

module.exports = mongoose.model("users", userSechma);