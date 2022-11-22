const express = require('express');
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");

const PaymentInstance = new PaymentController(new PaymentService());


router.get("/", (req, res, next) =>
{
  return res.json({
    "/payment": "Generates a Payment Link",
    "/subscription": "Generates a Subscription Link"
  })
})

// Leer el body del request y recibir la informacion del frontend.
// Esto se va a pasar al controller y luego al service para popular la data.
router.post('/payment', (req, res, next) =>
{
  // res.set("Access-Control-Allow-Origin", "*");

  console.log("PAYMENT ROUTE")

  PaymentInstance.getPaymentLink(req, res);
})

router.post('/subscription', (req, res, next) => PaymentInstance.getSubscriptionLink(req, res));

router.post('/webhook', (req, res) => PaymentInstance.webhook(req, res));

router.get('/healthz', (req,res) => {
  res.status(200).send('OK');
})

module.exports = router;
