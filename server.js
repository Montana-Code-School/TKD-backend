const express = require('express');

const SERVER_CONFIGS = require('./constants/server');

import { configureServer } from './serverConfig';
import  { configureRoutes } from './routes/index';

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port ' + SERVER_CONFIGS.PORT);
});
