const app = require('./app');

const main = () => {
  try {
    app.listen(app.get('port'), () => {
      console.log(`Server listening at ${app.get('port')}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
