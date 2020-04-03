const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db"
});

connection.connect();

const retrieveAllEmployees = cb => {
  connection.query("SELECT * FROM employees", function(error, results, fields) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  retrieveAllEmployees
};
