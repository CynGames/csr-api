const { catchAsync, endpointResponse } = require('../helpers');

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      console.log({ message: 'Health controller code' });

      endpointResponse({
        res,
        code: 200,
        message: 'Health check successful',
        body: {},
      });
    } catch (error) {
      next(error);
    }
  }),
};
