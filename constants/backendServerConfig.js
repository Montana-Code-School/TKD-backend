const path = require('path');
const SERVER_PORT = 5000;
process.env.NODE_ENV = "dev";

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || SERVER_PORT
};

module.exports = SERVER_CONFIGS;
