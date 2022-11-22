const open = require('open');

class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    async getPaymentLink(req, res) {

        console.log({message: "PAYMENT LINK PRE"})

        const payment = await this
            .paymentService
            .createPayment(req.body);

        console.log({message: "PAYMENT LINK POST", content: payment.init_point})

        return res.status(300).json(open(payment.init_point));

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