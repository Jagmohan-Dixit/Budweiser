const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const {RegisterAuthor, LoginAuthor, LogoutAuthor, Get}  = require("../controllers/UserController");

router.post('/register', RegisterAuthor);
router.post('/login', LoginAuthor);
router.get('/logout', authenticate, LogoutAuthor);

module.exports = router;
