const express = require('express')
const { testController } = require('../controllers/testCallback')

// router object
const router = express.Router()

// routes
router.get('/',testController);

//export
module.exports  = router;
