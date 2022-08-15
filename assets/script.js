var saveBtn =$('.saveBtn')
var today=moment();
$("#currentDay").text(today.format("MMM Do, YYYY")); //shows current date at top of screen, works good


const d =new Date();
var currentTime =d.getHours();

console.log(currentTime);

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
    console.log("Clicked:"); //this button works
});

