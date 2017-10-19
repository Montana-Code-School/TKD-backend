const mysql = require('mysql');

const host = "us-cdbr-iron-east-05.cleardb.net"
const user = "b9ad8cb6cfd82f"
const pswd = "9c8bcd72"
const dbname = "heroku_4bb107ad2e4a484"

const localHost = "localhost"
const localUser = "root"
const localPswd = "13fuzzybunnys"
const localDbname = "saja_academy"


// config db ====================================
const pool = mysql.createPool({
  host: host || localHost,
  user: user || localUser,
  password: pswd || localPswd,
  port: "3306",
  database: dbname || localDbname
});

const databaseHelpers = {
  getStudent : app => {
      pool.getConnection((err, connection) => {
        app.get('/student/:studentemail', (req, res) => {
          const userQuery = "SELECT user.id FROM heroku_4bb107ad2e4a484.user WHERE user.email =" + connection.escape(req.params.studentemail);
          pool.query(userQuery, (err, result, field) => {
            if(!err) {
              res.json({ result })
            }
            else {
              res.json({ err })
            }
          })
        })
        connection.destroy();
        if (err) throw err;
      })
  },

  getGenData : app => {
    pool.getConnection((err, connection) => {
      app.get('/classInfo/:userId', (req, res) => {
        const userQuery = "SELECT student.id FROM heroku_4bb107ad2e4a484.student WHERE user_id =" + connection.escape(req.params.userId);
        pool.query(userQuery, (err, result, field) => {
          if(!err) {
            const nxtQuery = "SELECT * FROM (heroku_4bb107ad2e4a484.student INNER JOIN heroku_4bb107ad2e4a484.payment ON student.id = payment.student_id) WHERE student.id =" + result[0].id;
            pool.query(nxtQuery, (err, result, field) => {


              if(!err) {
                res.json({ result })
              }
              else{
                res.json({ err });
              }
            })
          }
          else {
            res.json({ err })
          }
        })
      })

      connection.destroy();
      if (err) throw err;
    })
  }
}

module.exports = databaseHelpers;
