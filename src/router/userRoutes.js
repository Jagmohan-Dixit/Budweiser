const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const {RegisterUser, LoginUser, LogoutUser}  = require("../controllers/UserController");

router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.get('/logout', authenticate, LogoutUser);

module.exports = router;
