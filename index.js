const express = require('express');
const app = express();
const port = 8000;

//Using Express Router

app.use('/', require('./routes')); // it will by default fetch index

app.listen(port, function(err){
    if(err){
        console.log(`Error is setting up the server: ${err}`);
    }

    console.log(`The server is up and running at port: ${port}`);
});

