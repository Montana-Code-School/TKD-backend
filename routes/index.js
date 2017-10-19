const paymentApi = require('./payment');
const databaseHelpers = require('./SqlQuerys');

const configureRoutes = app => {
      paymentApi(app);
      databaseHelpers.getStudent(app);
      databaseHelpers.getGenData(app);
};

module.exports = configureRoutes;
