const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

//Set up static content
app.use(express.static('./assets'));

//Using Express Router
app.use('/', require('./routes')); // it will by default fetch index

// Set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error is setting up the server: ${err}`);
    }

    console.log(`The server is up and running at port: ${port}`);
});

