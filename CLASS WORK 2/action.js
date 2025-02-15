import {tofahrenheit,tocelsius } from "./math.js";
let convertBtn = document.getElementById("convertBtn").addEventListener("click",function(){
    let tempInput = document.getElementById("tempInput").value
    let unitSelect = document.getElementById("unitSelect").value
    let Result = document.getElementById("result")
    let converttemp;
    if(unitSelect === "celsius"){
       converttemp =  tofahrenheit(parseFloat(tempInput))
        Result.innerHTML = ` ${tempInput}°C converted to ${converttemp.toFixed(2)}°F`
    }else{
         converttemp =  tocelsius(parseFloat(tempInput))
         Result.innerHTML = ` ${tempInput}°F converted to ${converttemp.toFixed(2)}°C`
    }

    

})


 