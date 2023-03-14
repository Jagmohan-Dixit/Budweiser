const Author = require('../model/AuthorModel');
// const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

// connecting to database
require('../db/conn');


// Posting Author's Data to Database using Register Route

const RegisterAuthor = async (req, res) => {
    const { name , email, phoneno, password, confirmpassword } = req.body;
    console.log(req.body);
    
    if(!name || !email || !phoneno || !password || !confirmpassword) {
        return res.status(421).json({error : "Please Filled All the Fields"});
    }
    try {
            const userExist = await Author.findOne({email : email});
            const userExist1 = await Author.findOne({phoneno : phoneno});

            if(userExist || userExist1) {
                return res.status(422).json({error : "User Already Exists"});
            } else if (password.length < 8){
                return res.status(423).json({error : "Password should have min length of 8 characters"});
            } else if (password !== confirmpassword) {
                return res.status(420).json({error : "Passwords are not Matching"});
            } else {
                const user = new Author({name, phoneno, email, password, confirmpassword});
                await user.save();
                return res.status(201).json({message : "User Registered Successfully"});
            }
    } catch(err) { console.log(err); }
};

// checking Author's login details if they exist or not in database

const LoginAuthor = async (req, res) => {
    try{
        const { email, password } = req.body; 
        
        if(!email || !password) {
            return res.status(400).json({error : "Please Filled All the Fields"});
        }

        const userlogin = await Author.findOne({email : email});

        if(userlogin) {
            const token = await userlogin.generateAuthToken(); 
            res.cookie("jwttoken", token, {  
                expires:new Date(Date.now() + 25892000000), 
                httpOnly:true 
            });
            console.log(token);
            if(password === userlogin.password){
                console.log("password match");
                res.json({message : "User Login Successfully"}); 
            } else { 
                res.status(402).json({error : "Wrong Password"});
            } 
        } else {
                res.status(401).json({error : "Invalid Details"})
            }
    } catch (err) {
        console.log(err);
    }
};

// Logout the Author 

const LogoutAuthor =  async (req, res) => {
    console.log("Hello Logout");
    res.clearCookie('jwttoken', {path:'/'});
    res.status(200).send("User Logout Successfully");
};



module.exports = { RegisterAuthor, LoginAuthor, LogoutAuthor};