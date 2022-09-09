const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")

router.post("/createuser", userController.createUser) // user creation

module.exports = router;