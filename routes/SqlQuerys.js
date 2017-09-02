const mysql = require('mysql');

const host = "us-cdbr-iron-east-05.cleardb.net"
const user = "b82708b72f397b"
const pswd = "171489ac"
const dbname = "heroku_92af27f11107b0b"

// config db ====================================
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

connection.connect();

const getStudent = app => {
  app.get('/student/:studentemail', (req, res) => {
    const userQuery = "SELECT user.id FROM heroku_92af27f11107b0b.user WHERE user.email =" + connection.escape(req.params.studentemail);
    connection.query(userQuery, function(err, result, fields) {
      if(!err || result.length > 0){
        res.json({result});
      }
    });
  });
}

module.exports = getStudent;
