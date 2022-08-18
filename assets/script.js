var saveBtn =$('.saveBtn');
var textarea=$('.description');
var today=moment();
var savedData =[]
$("#currentDay").text(today.format("MMM Do, YYYY")); //shows current date at top of screen, works good

const d =new Date();
var currentTime =d.getHours();


$(".time-block").each(function (){
var comparisonHour = parseInt($(this).attr("id"));   //grabs id element, turns into integer, compares it to current hour

if (comparisonHour<currentTime){
    $(this).addClass("past");
}
else if(comparisonHour===currentTime){
    $(this).addClass("present");
}
else{
    $(this).addClass("future");
}
}
);

saveBtn.click(function(){
    saveMessages();

});

function saveMessages(event){


    for(i=0;i<9;i++){
        console.log( document.body.children[1].children[i].children[1].value);
     
        savedData.push(document.body.children[1].children[i].children[1].value)
    }
    console.log(savedData);
  
    localStorage.setItem("savedData",JSON.stringify(savedData));


}
renderMessage();

function renderMessage(){
    var showData=JSON.parse(localStorage.getItem("savedData"))
   for(var j=0;j<9;j++){
    document.body.children[1].children[j].children[1].textContent=showData[j];
   }
}