const { required } = require("joi");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    "name":{type:String,required:true},
    "email":{type:String,required:true,unique:true},
    "mobile_no":{type:Number,required:true,unique:true},
    "gender":{type:String,required:true},
    "profile":String,
    "file":String
    
})

module.exports={
 userSchema
}