const express = require('express');
const { GroupController } = require('../controllers');
const router = express.Router();

router.post('/',GroupController.createGroup);

router.get('/:id',GroupController.getGroup);



module.exports = router;
