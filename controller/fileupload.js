const {ObjectId} =require("mongodb")
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

const getAllUsers = async (req, res) => {
    const id=req.params.id
    try {
        if(id){
            const result = await UserModel.find({
                _id: new ObjectId(id)
            }); 
        res.status(200).json({
            success: true,
            msg: "Details of user",
            result,
        });
        }

        const result = await UserModel.find(); 
        res.status(200).json({
            success: true,
            msg: "All users retrieved successfully",
            result,
        });
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message, 
        });
    }
};

const getUserbyId = async (req, res) => {
    const {id} = req.params;
    try {
        let result;

        if (id) {
            result = await UserModel.find({
                _id: new ObjectId(id)
            });
            
            if (!result || result.length === 0) {
                return res.status(404).json({
                    success: false,
                    msg: "User not found"
                });
            }

            return res.status(200).json({
                success: true,
                msg: "Details of user",
                result,
            });
        }


        result = await UserModel.find();

        return res.status(200).json({
            success: true,
            msg: "All users retrieved successfully",
            result,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });
    }
};

const editUserDetails = async (req, res) => {
    const { id, name, email, mobile_no } = req.body;
    try {
        const result = await UserModel.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    name: name,
                    email: email,
                    mobile_no: mobile_no,
                }
            }
        );
        if (result.modifiedCount!=0) {
            res.status(200).json({
                success: true,
                msg: "User details updated successfully",
                result
            });
        }if(result.matchedCount==0) {
            res.status(404).json({
                success: false,
                msg: "User not found"
            });
        }
        

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });
    }
};



const deleteUser = async (req, res) => {
    const { id } = req.params;
    
    try {
        const result = await UserModel.findByIdAndDelete({_id:id})

        if (result) {
            res.status(200).json({
                success: true,
                msg: "User Deleted Successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                msg: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });
    }
};



module.exports = {
    setupProfile,
    getAllUsers,
    getUserbyId,
    editUserDetails,
    deleteUser
};
