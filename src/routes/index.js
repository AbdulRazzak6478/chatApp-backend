const express = require('express');

const router = express.Router();
const groupRoutes = require('./group-routes.js')
const { InfoController, UserController } = require('../controllers/index.js');

router.use('/groups',groupRoutes);

router.get('/info',InfoController.info);

router.post('/register',UserController.signup);

router.post('/signin',UserController.signIn);
 

module.exports = router;

