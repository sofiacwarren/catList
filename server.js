const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const queries = require("./queries");

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/api/cows", (req, res) => {
  // run your query here
  res.send("hello from the server!");
});

app.post("/api/cows", (req, res) => {
  res.send("new cow sent to server")
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
