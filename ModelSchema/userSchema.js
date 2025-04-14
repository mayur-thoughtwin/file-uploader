const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "mobile_no":Number,
    "gender":String,
    "profile":String,
    "file":String
    
})

module.exports={
 userSchema
}