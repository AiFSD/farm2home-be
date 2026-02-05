const mongoose = require("mongoose")

const createUser = new mongoose.Schema({
     name:{type : String },
     email : {type : String},
     password: {type : String}
})

module.exports = mongoose.model("User" , createUser)