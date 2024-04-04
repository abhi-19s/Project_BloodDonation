const express = require('express')
const {registerController,loginController, currentUserController} = require("../controllers/authController")
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

// routes
// Register || POST
router.post('/register',registerController)
// Register || LOGIN
router.post('/login',loginController)
// get current user || get
router.get('/current-user',authMiddleware,currentUserController)

module.exports = router