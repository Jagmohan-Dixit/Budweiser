const Books = require('../model/BookModel');
// const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");

// connecting to database
require('../db/conn');


const CreateBook = async (req, res) => {
    try {
        const { id, title, likes, author } = req.body;
        const newBook = new Books({ title, likes, author });
        await newBook.save();
        console.log(newBook);
        return res.status(200).json({data: newBook, msg: "New Book Added"});
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

const GetBookbyID = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.findOne({_id : id});
        console.log(book);
        return res.status(200).json(book);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

const DeleteBookbyID = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.deleteOne({_id : id});
        if(book.deletedCount == 0) 
            return res.status(400).json({"msg":"Book Not Found"});
        return res.status(200).json({data: book, msg : "Book Deleted Successfully"});
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

const UpdateBookbyID = async (req, res) => {
    try {
        const { id, title, likes, author } = req.body;
        const book = await Books.findOne({_id : id});
        if(!book) res.status(400).json({"msg":"Book Not Found"});
        book.title = title;
        book.likes = likes;
        book.author = author;
        await book.save();
        console.log(book);
        return res.status(200).json(book);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }  
}

// Gettting All Authors From Database

const GetAllBooks = async (req, res) => {
    try {
        const allbooks = await Books.find();
        console.log(allbooks);
        return res.status(200).json(allbooks);
    } catch(err) { 
        console.log(err);
        res.status(400).json(err);
    }   
};

// checking Author's Details by their Unique ID

const BookLike = async (req, res) => {
    try{
        const { id } = req.params; 
        console.log(id);
        const book = await Books.findOne({_id : id});
        if(!book) 
            return res.status(400).json({"msg":"Book Not Found"});
        book.likes += 1;
        await book.save();
        res.status(200).json(book);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};


const BookUnlike = async (req, res) => {
    try{
        const { id } = req.params;
        console.log(id);
        const book = await Books.findOne({_id : id});
        if(!book) 
            return res.status(400).json({"msg":"Book Not Found"});
        book.likes -= 1;
        await book.save();
        res.status(200).json(book);
    } catch(err) { 
        console.log(err); 
        res.status(400).json(err);
    }
};

module.exports = { GetBookbyID,DeleteBookbyID, UpdateBookbyID, CreateBook, GetAllBooks, BookLike, BookUnlike};