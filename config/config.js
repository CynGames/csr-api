require('dotenv').config();

module.exports = {
  port: process.env.PORT | 3000,
  main_access_token: process.env.MAIN_ACC_ACCESS_TOKEN,
  test_access_token: process.env.SELLER_TEST_ACCESS_TOKEN,
};
