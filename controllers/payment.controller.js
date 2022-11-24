const { catchAsync, endpointResponse } = require('../helpers');

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      console.log({ message: 'Payment controller code' });

      // const response = await userService.list(attributes, page, size);
      // if (!response.userList)
      //     throw new ErrorObject('Error searching users', 500);

      endpointResponse({
        res,
        code: 201,
        message: 'Payment successful',
        body: res.init_point,
      });
    } catch (error) {
      next(error);
    }
  }),
};
