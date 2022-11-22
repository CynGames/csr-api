const open = require('open');

class PaymentController
{
  constructor (paymentService)
  {
    this.paymentService = paymentService;
  }

  async getPaymentLink(req, res)
  {

    try
    {
      const payment = await this
        .paymentService
        .createPayment(req.body);

      console.log('PAYMENT LINK')
      console.log(payment.init_point);

      return res.json(open(payment.init_point));
    } catch (error)
    {
      console.log(error);
      return res
        .status(500)
        .json({
          error: true, msg: `Hubo un error con PAYMENT`
        });
    }
  }

  async getSubscriptionLink(req, res)
  {

    try
    {
      const subscription = await this
        .paymentService
        .createSubscription();

      return res.json(subscription);
    } catch (error)
    {
      console.log(error);
      return res
        .status(500)
        .json({
          error: true, msg: "Hubo un error con SUBSCRIPTION"
        });
    }
  }
}

module.exports = PaymentController;