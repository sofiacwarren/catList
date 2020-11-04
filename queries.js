const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passw0rd",
  database: "cowsData"
});

connection.connect((err) => {
  if (err) {
    console.error('error: ', err)
  } else {
    console.log('mySQL connected to server')
  }
});

//getAll
const retrieveAllCows = (cb) => {
  connection.query("SELECT * FROM cows", function(
    error,
    results,
    fields
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results)
    }
  });
}

//post -> new cow to db

// Don't forget to export your functions
module.exports = {
  retrieveAllCows
};
