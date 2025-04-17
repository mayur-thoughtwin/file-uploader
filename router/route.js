const express = require("express");
const upload = require("../middleware/multer");
const { setupProfile, getAllUsers, editUserDetails, deleteUser,  } = require("../controller/fileupload");
const schema= require("../validate/validate")
const router = express.Router();


router.post("/upload_details", upload.fields([{ name: 'image', maxCount: 1 },{ name: 'csv', maxCount: 1 }]),setupProfile)
router.get("/getalluser",getAllUsers)
router.get("/getuserdetails/:id", getAllUsers);
router.put("/edituserdetails",upload.none(),schema.edit_details,editUserDetails)
router.delete("/deleteuser/:id", deleteUser); 
module.exports = { router };
