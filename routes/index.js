const { Router } = require('express');
const paymentRouter = require('./payment.routes');
const subscriptionRouter = require('./subscription.routes');
const healthRouter = require('./health.routes');

const router = Router();

router.use('/payment', paymentRouter);
router.use('/subscription', subscriptionRouter);
router.use('/health', healthRouter);

module.exports = router;
