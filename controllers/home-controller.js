const db = require('../config/mongoose');
const Detail = require('../models/details');

var detailList = [
    {
        des: "Vegetable Vendor",
        proximity:"under 1.5 m",
        location:"biswamil chowk",
        date: "21/04/20"
    },

    {
        des: "Rahul my friend",
        proximity:" from 1.5 to 3m",
        location:"apts",
        date: "22/04/20"
    }
]

module.exports.home = function(req,res){
    Detail.find({}, function(err, detailing){
        if(err){
            console.log(`Error in fetching details from DB: ${err}`);
        }

        return res.render('home',{
            title: "yeh meri list!",
            detail_list: detailing
        })
    });
}


module.exports.addlist = function(req,res){
    console.log("apan a gya");
    console.log(detailList);
    console.log(req.body);
    
    Detail.create({
        des: req.body.des,
        proximity: req.body.proximity,
        location: req.body.location,
        date: req.body.date
    },function(err, newDetail){
        if(err){
            console.log(`Error in adding a detail: ${err}`);
            return;
        }

        console.log("*************",newDetail);
        return res.redirect('back');
    });
}

module.exports.dellist = function(req,res){
    
    //console.log(`The the element to be deleted is: ${req.query.id}`);
    //console.log(`The link is: ${req}`);
    let list = new Array();
    list = req.query.id;
    let count=0;
    let ele = new String("");
    let id_array = new Array();
    console.log(`The elements to be deleted are: ${list}`);
    console.log(`the length of array: ${list.length}`);
    for(let i=0; i< list.length; i++){
        if(list[i]=="*"){
            count++;
            id_array.push(ele);
            ele = "";
        }
        else {
            ele += list[i].toString();
        }
    }
    console.log(`The no. of ids are: ${count}`);
    console.log(id_array);

    
    for(let j=0; j< id_array.length; j++){
        let id = id_array[j];
        Detail.findByIdAndDelete(id, function(err){
            if(err){
            console.log(`Error in deleting an object from database: ${err}`);
            return;
            }
        });
    }
    return res.redirect('back'); 
    /*Detail.findByIdAndDelete(id, function(err){
        if(err){
        console.log(`Error in deleting an object from database: ${err}`);
        return;
        }

        return res.redirect('back');
    });*/
}

//module.exports.actionName = function(req,res){}