const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller');

router.get('/', indexController.home);
router.post('/sign-in', indexController.signIn);
router.get('/sign-in', indexController.home);
module.exports = router;