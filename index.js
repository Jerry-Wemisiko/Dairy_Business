var findTotal=document.getElementById("prod")

function totalProduction(){
    var shedA=parseInt(document.getElementById("a"));
    var shedB=parseInt(document.getElementById("b"));
    var shedC=parseInt(document.getElementById("c"));
    var shedD=parseInt(document.getElementById("d"));

    var total =shedA+shedB+shedC+shedD;


    document.getElementById("weekly").innerHTML=total +"liters";
}
 

function incomeOverTime(){
    
var income =document.getElementsByClassName("overtime");
    
var shedA=parseInt(document.getElementById("a"));
var shedB=parseInt(document.getElementById("b"));
var shedC=parseInt(document.getElementById("c"));
var shedD=parseInt(document.getElementById("d"));
var rate=parseInt(document.getElementById("rate"));


var total =a+b+c+d;

var week=7;
var month=30;
var year=365;


var weeklyIncome=week*rate*total;
var monthlyIncome=month*rate*total;
var yearlyIncome=year*rate*total;
}

 