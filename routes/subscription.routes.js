const express = require('express');
const { subscriptionController } = require('../controllers');

const router = express.Router();

router.post('/', subscriptionController.post);

module.exports = router;
