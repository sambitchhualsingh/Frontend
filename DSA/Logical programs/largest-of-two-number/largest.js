let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let result = document.getElementById('result');
let logic = document.getElementById('logic');


function condi(a,b) {
    if(a > b) {
        result.innerHTML = `<h1> ${a} is Largest Number</h1>`
    } else {
        result.innerHTML = `<h1> ${b} is Largest Number </h1>`
    }
}


function maths(a,b) {
    result.innerHTML = `<h1> ${math.max(a,b)+ "is the Largest Number"}</h1>`
}


function op(a,b) {

}


function submitHandler(event) {
    event.preventDefault();
    let a = Number(inp1.value);
    let b = Number(inp2.value);


    switch(logic.value) {
        case "condition": condi(a,b);
            break;
        case "math": maths(a,b);
            break;
        case "operator": op(a,b);
            break;
        default: result.innerHTML = `<h1>Select Proper Method</h1>`
    }
}