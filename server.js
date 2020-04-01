const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/employees", (req, res) => {
  // run your query here
  res.send("hello from the server!");
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
