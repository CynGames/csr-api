const open = require('open');

class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    async getPaymentLink(req, res) {

        try {
            const payment = await this
                .paymentService
                .createPayment(req.body);

            console.log({message: "PAYMENT LINK", content: payment.init_point})

            return res.status(300).json(open(payment.init_point));
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({
                    error: true, msg: `Hubo un error con PAYMENT`
                });
        }
    }

    async getSubscriptionLink(req, res) {

        try {
            const subscription = await this
                .paymentService
                .createSubscription();

            return res.json(subscription);
        } catch (error) {
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