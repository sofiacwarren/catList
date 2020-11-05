const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require('cors');
//allows client render into localhost
app.use(express.static(path.join(__dirname, "./frontend/build")));
//bodyParser to convert body to json
app.use(bodyParser.json());
//parses out information from url
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get("/api/cows", (req, res) => {
  queries.retrieveAllCows((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
});

app.post("/api/cows", (req, res) => {
  console.log('req.body: ', req.body)
  var input = {
    cowName: req.body.inputCowName,
    description: req.body.inputDescription
  };
  queries.createNewCow(input, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
