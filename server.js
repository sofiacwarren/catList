const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");
const bodyParser = require("body-parser");
//allows client render into localhost
app.use(express.static(path.join(__dirname, "./frontend/build")));
//bodyParser to convert body to json
app.use(bodyParser.json());
//parses out information from url
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/cats", (req, res) => {
  queries.retrieveAllCats((err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
});

app.post("/api/cats", (req, res) => {
  console.log('req.body: ', req.body)
  var input = {
    catName: req.body.cat_name,
    description: req.body.cat_description
  };
  queries.createNewCat(input, (err, data) => {
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
