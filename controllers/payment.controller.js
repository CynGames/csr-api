const open = require('open');
const { catchAsync, endpointResponse, ErrorObject } = require('../helpers');
const { generatePaymentLink } = require('../utils/payment.util');

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      console.log({ message: 'Payment controller code' });

      const payment = await generatePaymentLink(req.body);

      if (!payment.init_point)
        throw new ErrorObject('Error generating payment link', 500);

      open(payment.init_point);

      console.log({ message: 'init point' }, payment.init_point);
      endpointResponse({
        res,
        code: 201,
        message: 'Payment successful',
        body: payment.init_point,
      });
    } catch (error) {
      next(error);
    }
  }),
};
