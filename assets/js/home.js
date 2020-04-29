console.log("Script Loaded........................................................");

var buttons = document.getElementsByClassName("checkboxes");
var deletion = document.getElementById("deletion");
var addition = document.getElementById("addition");
var tracker = document.getElementById("tracker");

var array = new Array();

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
});

addition.addEventListener('click', function(){
    tracker.submit();
});