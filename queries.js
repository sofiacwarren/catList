const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "catData"
});

connection.connect((err) => {
  if (err) {
    console.error('error: ', err)
  } else {
    console.log('mySQL connected to server')
  }
});

//getAll
const retrieveAllCats = (cb) => {
  connection.query("SELECT * FROM cat", function(
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
const createNewCat = (input, cb) => {
  const queryStr = `INSERT INTO cat (cat_name, cat_description) VALUES ( ?, ?)`
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
  retrieveAllCats,
  createNewCat
};
