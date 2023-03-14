const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const { GetAllAuthors, GetAuthorByID, GetCurrentAuthor, DeleteAuthorByID }  = require("../controllers/AuthorController");

router.get('/authors', authenticate, GetAllAuthors);
router.get('/authors/:id', authenticate, GetAuthorByID);
router.post('/authors/me', authenticate, GetCurrentAuthor);
router.delete('/authors/:id', authenticate, DeleteAuthorByID);

module.exports = router;
