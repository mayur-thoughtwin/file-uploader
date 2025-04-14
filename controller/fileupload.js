

const { UserModel } = require("../ModelSchema/userModel");

const setupProfile = async (req, res) => {
    const { name, email, mobile_no, gender } = req.body;
    const imageFile = req.files['image']?.[0].filename;
    const csvFile = req.files['csv']?.[0].filename;
    console.log(req.files)
    try {
        const newUser = new UserModel({
            name,
            email,
            mobile_no,
            gender,
            profile: imageFile,
            file: csvFile
        });

        await newUser.save(); 

        res.status(200).json({
            msg: "Successfully uploaded details",
            details: newUser
        });

    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = {
    setupProfile
};
