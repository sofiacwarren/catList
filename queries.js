const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db"
});

connection.connect();

// Your database query here



// Don't forget to export your functions
module.exports = {
  
};
