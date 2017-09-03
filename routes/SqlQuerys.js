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
    pool.getConnection((err, connection) {
      if (err) throw err;
            app.get('/student/:studentemail', (req, res) => {
              const userQuery = "SELECT user.id FROM heroku_4bb107ad2e4a484.user WHERE user.email =" + connection.escape(req.params.studentemail);
              connection.query(userQuery, function(err, result, fields) {
                if(err){
                  res.json({error: "Something went wrong. Check your endpoint information"})
                } else if (!err || result.length > 0) {
                  res.json({result});
                }
              });
            });
    }))
    // console.log("get student called")
    // const interval = setInterval(function(){
    //   connection.ping(function(err) {
    //     if(err){
    //       console.log('database is sleeping.')
    //     } else {
    //       app.get('/student/:studentemail', (req, res) => {
    //         const userQuery = "SELECT user.id FROM heroku_4bb107ad2e4a484.user WHERE user.email =" + connection.escape(req.params.studentemail);
    //         connection.query(userQuery, function(err, result, fields) {
    //           if(err){
    //             res.json({error: "Something went wrong. Check your endpoint information"})
    //           } else if (!err || result.length > 0) {
    //             res.json({result});
    //           }
    //         });
    //       });
    //       clearInterval(interval);
    //     }
    //   })
    // }, 2000)
  },

  getGenData : app => {
    // console.log("get gendata")
    // const interval = setInterval(function(){
    //   connection.ping(function(err) {
    //     if(err){
    //       console.log('database is sleeping.')
    //     } else {
    //       app.get('/classInfo/:userId', (req, res) => {
    //         const userQuery = "SELECT * FROM heroku_4bb107ad2e4a484.student WHERE user_id =" + connection.escape(req.params.userId);
    //         connection.query(userQuery, function(err, result, fields) {
    //           if(err){
    //             res.json({error: "Something went wrong. Check your endpoint information"})
    //           } else if (!err || result.length > 0) {
    //             res.json({result});
    //           }
    //         });
    //       });
    //       clearInterval(interval);
    //     }
    //   })
    // }, 500)
    }

  }

module.exports = databaseHelpers;
