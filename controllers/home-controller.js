const db = require('../config/mongoose'); // loads database odm
const Detail = require('../models/details'); // loads database schema

var detailList = [ // Sample Data
    {
        des: "Vegetable Vendor",
        proximity:"under 2.5 m",
        location:"biswamil chowk",
        date: "21/04/20"
    },

    {
        des: "Rahul my friend",
        proximity:" between 2.5 and 5m",
        location:"apts",
        date: "22/04/20"
    }
]

/***************************************** HOME-PAGE CONTROLLER*************************************************/
module.exports.home = function(req,res){ // renders  the home page
    Detail.find({}, function(err, detailing){
        if(err){
            console.log(`Error in fetching details from DB: ${err}`);
        }

        return res.render('home',{
            title: "Contacts Tracker for Covid-19 Control!",
            detail_list: detailing
        })
    });
}



/***************************************** ADDITION CONTROLLER*************************************************/
module.exports.addlist = function(req,res){ // Adds Contact to the List
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

        console.log("Added to Database: ",newDetail);
        return res.redirect('back');
    });
}

/***************************************** DELETION CONTROLLER*************************************************/

module.exports.dellist = function(req,res){ // Deletes the selected contacts from the List
    
    let list = new Array(); // array to store the request 
    list = req.query.id;
    let count=0;
    let ele = new String(""); // filters out an ID from the request made
    let id_array = new Array(); // stores all the object ids that are to be deleted

    for(let i=0; i< list.length; i++){ 
        if(list[i]=="*"){ // * acts as a separator between 2 ids
            count++;
            id_array.push(ele);
            ele = "";
        }
        else {
            ele += list[i].toString();
        }
    }
    console.log(`The no. of contacts to be deleted are: ${count}`);

    
    for(let j=0; j< id_array.length; j++){
        let id = id_array[j];
        Detail.findByIdAndDelete(id, function(err){
            if(err){
            console.log(`Error in deleting an object from database: ${err}`);
            return;
            }
            console.log(`Deleted: ${id}`);
        });
    }
        function redir(){ // function to redirect back
        return res.redirect('back');
        }

        this.setTimeout(redir, 1000); // used to provide a delay otherwise there occurs some garbage values on home page at times
}

//module.exports.actionName = function(req,res){}