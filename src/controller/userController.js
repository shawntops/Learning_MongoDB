const User = require("../model/User");

//Get all users
exports.getUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json({
            sucess: true,
            message: "Users found",
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message,
        });
    }
}

//Get single user

//Update user

//delete user