const express = require('express');
const { PrivateChatController } = require('../controllers');
const router = express.Router();

router.post('/',PrivateChatController.createPrivateChat);




module.exports = router;
