const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const { GetAllUsers, GetUserByID, GetCurrentUser, DeleteUserByID }  = require("../controllers/UserController");

router.get('/users', authenticate, GetAllUsers);
router.get('/users/:id', authenticate, GetUserByID);
router.post('/users/me', authenticate, GetCurrentUser);
router.delete('/users/:id', authenticate, DeleteUserByID);

module.exports = router;
