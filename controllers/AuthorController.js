const Author = require('../model/AuthorModel');

// connecting to database
require('../db/conn');


// Gettting All Authors From Database

const GetAllAuthors = async (req, res) => {
    try {
            const users = await Author.find();
            console.log(users);
            return res.status(200).json(users);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
     }
};

// checking Author's Details by their Unique ID

const GetAuthorByID = async (req, res) => {
    try{
        const { id } = req.params; 
        const user = await Author.findOne({_id : id});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

const DeleteAuthorByID = async (req, res) => {
    try{
        const { id } = req.params; 
        const user = await Author.deleteOne({_id : id});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};


const GetCurrentAuthor = async (req, res) => {
    try{
        const { id } = req.body;
        const user = await Author.findOne({_id : id});
        res.status(200).json(user);
    } catch(err) { 
        console.log(err); 
        res.status(400).json(err);
    }
};

module.exports = { GetAllAuthors, GetAuthorByID, GetCurrentAuthor,DeleteAuthorByID};