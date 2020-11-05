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
    results
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results)
    }
  });
}

//post -> new cow to db
const createNewCow = (input, cb) => {
  const queryStr = `INSERT INTO cows (cow_name, cow_description) VALUES (?, ?)`
  connection.query(queryStr, [input.cowName, input.description], function(
    error,
    results
    ) {
      if (error) {
        cb(error, null);
      } else {
        cb(null, results)
      }
  });
}

// Don't forget to export your functions
module.exports = {
  retrieveAllCows,
  createNewCow
};
