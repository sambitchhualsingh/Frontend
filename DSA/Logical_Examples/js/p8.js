function celToFar(){
    var variable = document.getElementById("con").value;
    let result = document.getElementById("result");
    switch(variable){
        case "farToCel" :   //c = F-32 / 1.8
                    let farToCel = document.getElementById("temp").value;
                    //result.innerHTML = ((farToCel - 32) * 5/9 ) + " celcius";
                    result.innerHTML = ((farToCel - 32) / 1.8 ) + " celcius";
                    break;
    
        case "CeltoFar" : //Fh = (cel * 1.8) +32
                    let celtofar = document.getElementById("temp").value;
                    //result.innerHTML = ((celtofar * 9/5) + 32) + " fahrenheit";
                    result.innerHTML = ((celtofar * 1.8) + 32) + " fahrenheit";
                    break;

        default : alert("Choose any one Conversion type");

    }  
}