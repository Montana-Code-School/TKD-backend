const paymentApi = require('./payment');
const databaseHelpers = require('./SqlQuerys');

const configureRoutes = app => {
  const interval = setInterval(function() {
    databaseHelpers.ping(app);
  }, 500);

  if(databaseHelpers.herokuLive === true) {
    console.log("no error")
    clearInterval(interval);
    databaseHelpers.paymentApi(app);
    databaseHelpers.getStudent(app);
  } else {
    console.error("error!")
  }
};

module.exports = configureRoutes;
