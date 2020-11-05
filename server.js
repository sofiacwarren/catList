const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");

app.use(express.static(path.join(__dirname, "./frontend/build")));

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
  var input = req.body.inputCow.split(',');
  queries.createNewCow((err, data) => {
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
