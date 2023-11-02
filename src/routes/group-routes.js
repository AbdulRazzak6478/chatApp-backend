const express = require('express');
const { GroupController } = require('../controllers');
const router = express.Router();

router.post('/',GroupController.createGroup);



module.exports = router;
