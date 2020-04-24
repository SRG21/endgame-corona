console.log("Setting up DB schema..................................");
 const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    des:{
        type: String,
        required: true
    },
    proximity:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    }
});

const Detail = mongoose.model('Detail', detailsSchema);
console.log("DB schema setup complete");
module.exports = Detail;