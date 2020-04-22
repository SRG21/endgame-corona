const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error is setting up the server: ${err}`);
    }

    console.log(`The server is up and running at port: ${port}`);
});

