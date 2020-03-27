const express = require('express');
const app = express();
const PORT = 3000;
const queries = require('queries');


app.get('/employees', (req, res)=>{
    // run your query here
    res.send('hello from the server!')
})


app.listen(PORT, ()=>{
    console.log(`server is running and listening on port ${PORT}`); 
})