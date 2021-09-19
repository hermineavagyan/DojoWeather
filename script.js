/*Creates alert events on the cities */
document.querySelectorAll(".city").forEach(function(elem){
    elem.addEventListener('click', function(){
        alert("Loading weather report for " + elem.innerText)
    });
})

/*Removes cookies note*/
var cookiesPolicy  = document.getElementById("cookiesPolicy")
function removeAccepteButton(){
    cookiesPolicy.remove();
}
 /*Converts from  fareheit to celsius  and vice verse*/  

function pickTemperature(element){
    var degree = document.querySelectorAll(".temperature")
    for (var i = 0; i< degree.length; i++){
        var numberToBeConverted = parseInt(degree[i].innerText)
        if(element.value =="Farenheit"){
             /*here goes conversion from  celsius to farenheit */
           var convertedNum = Math.round(((numberToBeConverted * (9/5)) +32))
           degree[i].innerText = convertedNum
           console.log(convertedNum)
           
        }
        else{
             /*here goes conversion from  fareheit to celsius */  
            var convertedNum = Math.round((numberToBeConverted -32)*(5/9))
            console.log(convertedNum)
            degree[i].innerText = convertedNum   
        }
        }
}
