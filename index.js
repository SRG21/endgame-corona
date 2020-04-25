const express = require('express');
const port = 8000;

const app = express();
//const db = require('./config/mongoose');
//const Detail = require('./models/details');

// AlWAYS REMEMBER TO USE PARSERS BEFORE ROUTES, leads to errors
app.use(express.urlencoded()); 

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

