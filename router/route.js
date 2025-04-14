const express = require("express");
const upload = require("../middleware/multer");
const { setupProfile } = require("../controller/fileupload");

const router = express.Router();


router.post("/upload_details", upload.fields([{ name: 'image', maxCount: 1 },{ name: 'csv', maxCount: 1 }]),setupProfile)

module.exports = { router };
