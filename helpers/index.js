const { catchAsync } = require('./catchAsync');
const { endpointResponse } = require('./success');
const { ErrorObject } = require('./error');

module.exports = { catchAsync, ErrorObject, endpointResponse };
