const axios = require('axios');

module.exports = {
  generatePaymentLink: async (requestBody) => {
    const { unit_price } = requestBody;

    const baseUrl = 'https://api.mercadopago.com/checkout/preferences';

    const body = {
      payer_email: '',
      items: [
        {
          id: 1,
          title: 'Donación',
          description: 'Apoyo a Cobranza de Socios Rafaela',
          category_id: '1',
          quantity: 1,
          currency_id: 'ARS',
          unit_price,
        },
      ],
      back_urls: {
        success: '/success',
        pending: '/pending',
        failure: '/failure',
      },
    };

    const payment = await axios.post(baseUrl, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MAIN_ACC_ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  },
};
