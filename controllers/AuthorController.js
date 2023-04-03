const User = require('../model/UserModel');

// connecting to database
require('../db/conn');


// Gettting All Users From Database

const GetAllUsers = async (req, res) => {
    try {
            const users = await User.find();
            console.log(users);
            return res.status(200).json(users);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
     }
};

// checking User's Details by their Unique ID

const GetUserByID = async (req, res) => {
    try{
        const { id } = req.params; 
        const user = await User.findOne({_id : id});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

const DeleteUserByID = async (req, res) => {
    try{
        const { id } = req.params; 
        const user = await User.deleteOne({_id : id});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};


const GetCurrentUser = async (req, res) => {
    try{
        const { id } = req.body;
        const user = await User.findOne({_id : id});
        res.status(200).json(user);
    } catch(err) { 
        console.log(err); 
        res.status(400).json(err);
    }
};

module.exports = { GetAllUsers, GetUserByID, GetCurrentUser,DeleteUserByID};