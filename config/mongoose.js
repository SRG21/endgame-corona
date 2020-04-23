console.log("Connecting to Database........................");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/To_do_list_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to the DB"));

db.once('open', function(){
    console.log(`Connected to the Database :: MongoDB`);
});

module.exports = db;