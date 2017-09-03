const express = require('express');

const SERVER_CONFIGS = require('./constants/backendServerConfig');
console.log(SERVER_CONFIGS);

const configureServer = require('./frontendServerConfig');
const configureRoutes = require('./routes/index');

const app = express();

configureServer(app);
configureRoutes(app);

app.get('/student', (req, res) => {
  res.json("hey yall");
});

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port ' + SERVER_CONFIGS.PORT);
});
