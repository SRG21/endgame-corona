console.log("Script Loaded........................................................");

var buttons = document.getElementsByClassName("checkboxes");
var deletion = document.getElementById("deletion");
var addition = document.getElementById("addition");
var tracker = document.getElementById("tracker");
var inputs = document.getElementsByTagName("input");
var selected = document.getElementById("prox");


var array = new Array();

/****************Identifies the checkboxes*********/
for( var i=0; i < buttons.length; i++){
    let checked = 0;
    buttons[i].addEventListener('click', function(){
        var val = this.getAttribute('data-value')
        if(checked == 0){
            array.push(val);
            checked=1;
        }
        else {
            for ( let j=0; j<array.length; j++){
                if( array[j] == val){
                    array.splice(j,1);
                    checked=0;
                }
            }
        }
    });
}

/**************Listens the delete button******************/

deletion.addEventListener('click', function(){
    console.log(`The checkboxes that will be deleted are ${array}`);
    var link = "/dellist/?id=";
    var plus = "*";
    for ( let j=0; j < array.length; j++){
        var value = array[j];
        link += value + plus;
    }
    console.log(`The link is: ${link}`);
    
    deletion.setAttribute("href", link);

    alert(array.length+" Contacts will be deleted from record");
});

/***********************Listens the Add Button*********/

addition.addEventListener('click', function(){
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value.length == 0){
            if(inputs[i].name == "des"){
                alert("Description is unfilled");
            }
            else{
            alert(inputs[i].name+" is unfilled");
            }

            return;
        }
    }
    if(selected.value == "nil"){
        alert("Please select an option");
        return;
    }

    tracker.submit(); // form submit
    alert("Your contacts history will be updated");
});