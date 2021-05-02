var findSum = document.getElementById("production");

findSum.onclick=totalProduction;

function totalProduction(){
    var shedA =parseInt(document.getElementById("num1").value);
    var shedB = parseInt(document.getElementById("num2").value);
    var shedC = parseInt(document.getElementById("num3").value);
    var shedD = parseInt(document.getElementById("num4").value);
        
    var litres = shedA + shedB + shedC + shedD;

}