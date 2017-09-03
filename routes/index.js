const paymentApi = require('./payment');
const databaseHelpers = require('./SqlQuerys');

const configureRoutes = app => {
  const interval = setInterval(function() {
    databaseHelpers.ping(app);
    if(databaseHelpers.herokuLive === true) {
      console.log("database is connected.")
    //clearInterval(interval);
      paymentApi(app);
      databaseHelpers.getStudent(app);
      databaseHelpers.getGenData(app);
    } else {
      console.log("database is sleepy.");
    }
  }, 2000);
};

module.exports = configureRoutes;
