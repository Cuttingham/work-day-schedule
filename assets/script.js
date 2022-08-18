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
    // var userInput =textarea.val();  //this button works
    // localStorage.setItem("userInput",JSON.stringify(userInput));
    // console.log(userInput);
});

function saveMessages(event){

    // document.body.children[1].children[1].children[1]

    for(i=0;i<9;i++){
        console.log( document.body.children[1].children[i].children[1].value);
     
        savedData.push(document.body.children[1].children[i].children[1].value)
    }
    console.log(savedData);
    // var userInputs={
    //     nineMemo: document.getElementById('9am').value,
    //     tenMemo: document.getElementById('10am').value,
    //     elevenMemo:document.getElementById('11am').value,
    //     twelveMemo:document.getElementById('12pm').value,
    //     oneMemo:document.getElementById('1pm').value,
    //     twoMemo:document.getElementById('2pm').value,
    //     threeMemo:document.getElementById('3pm').value,
    //     fourMemo:document.getElementById('4pm').value,
    //     fiveMemo:document.getElementById('5pm').value,
    // }
    // console.log(nineMemo);
    localStorage.setItem("savedData",JSON.stringify(savedData));


}
renderMessage();

function renderMessage(){
    var showData=JSON.parse(localStorage.getItem("savedData"))
   for(var j=0;j<9;j++){
    document.body.children[1].children[j].children[1].textContent=showData[j];
   }
}