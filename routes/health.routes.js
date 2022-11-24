const express = require('express');
const healthController = require('../controllers/health.controller');

const router = express.Router();

router.get('/', healthController.get);

module.exports = router;

// eslint-disable-next-line no-unused-vars
// router.get('/', (req, res) => {
//   res.status(200).send('OK');
// });
