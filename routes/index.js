const { Router } = require('express');
const paymentRouter = require('./payment.routes');
const subscriptionRouter = require('./subscription.routes');

const router = Router();

router.use('/payment', paymentRouter);
router.use('/subscription', subscriptionRouter);

module.exports = router;
