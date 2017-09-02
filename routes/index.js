const paymentApi = require('./payment');
const getStudent = require('./SqlQuerys');

const configureRoutes = app => {
  paymentApi(app);
  getStudent(app);
};

module.exports = configureRoutes;
