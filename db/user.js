const mongoose = require("mongoose");

const userSechma = new mongoose.Schema({
    name: String,
    email: String,
    contact: String
})

module.exports = mongoose.model("users", userSechma);