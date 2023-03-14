const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const { BookLike, BookUnlike, GetAllBooks, GetBookbyID, UpdateBookbyID, DeleteBookbyID, CreateBook }  = require("../controllers/BooksController");


router.get('/books', authenticate, GetAllBooks);
router.get('/books/:id', authenticate, GetBookbyID);
router.get('/books/like/:id', authenticate, BookLike);
router.get('/books/unlike/:id', authenticate, BookUnlike);
router.post('/books/new', authenticate, CreateBook);
router.post('/books/update', authenticate, UpdateBookbyID);
router.delete('/books/:id', authenticate, DeleteBookbyID);


module.exports = router;

