const express = require('express');
const { PrivateChatController } = require('../controllers');
const router = express.Router();

router.post('/',PrivateChatController.createPrivateChat);

router.get('/',PrivateChatController.getPrivateChats);




module.exports = router;
