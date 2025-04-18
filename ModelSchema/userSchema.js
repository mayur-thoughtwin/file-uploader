const { required } = require("joi");
const mongoose=require("mongoose");


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile_no: String,
  gender: String,
  profile: String,
  encoded_profile: String, 
  file: String
});

module.exports={
 userSchema
}