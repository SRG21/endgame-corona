/*const Detail = require('../models/details');
var detailList = require('./array');

module.exports.addlist = function(req,res){
    console.log("apan a gya");
    console.log(detailList);
    
    Detail.create({
        description: req.body.description,
        proximity: req.body.proximity,
        location: req.body.location,
        date: req.body.date
    },function(err, newDetail){
        if(err){console.log("Error in adding a detail")
        return;}

        console.log("*************",newDetail);
        return res.redirect('back');
    });
}*/