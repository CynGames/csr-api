const axios = require("axios");

class PaymentService
{

  async createPayment(requestBody)
  {
    const { unit_price } = requestBody

    const baseUrl = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "",
      items: [
        {
          id: 1,
          title: "Donación",
          description: "Apoyo a Cobranza de Socios Rafaela",
          category_id: "1",
          quantity: 1,
          currency_id: "ARS",
          unit_price
        }
      ],
      back_urls: {
        success: "/success",
        pending: "/pending",
        failure: "/failure"
      }
    };

    const payment = await axios.post(baseUrl, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAIN_ACC_ACCESS_TOKEN}`
      }
    });

    console.log("DENTRO DE PAYMENT SERVICE");
    console.log(payment);

    return payment.data;
  }

  async createSubscription()
  {
    const baseUrl = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Subscription de ejemplo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        start_date: "2020-06-02T13:07:14.260Z",
        end_date: "2022-07-20T15:59:52.581Z",
        transaction_amount: 10,
        currency_id: "ARS"
      },
      back_url: "https://www.google.com/",
      payer_email: "test_user_70968545@testuser.com",
    }

    const subscription = await axios.post(baseUrl, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SELLER_TEST_ACCESS_TOKEN}`
      }
    });

    return subscription.data;
  }
}

module.exports = PaymentService;