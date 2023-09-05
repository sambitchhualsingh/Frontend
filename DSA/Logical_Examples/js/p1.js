let num = document.getElementById("num");
let op = document.getElementById("op");
let output = document.getElementById("output");


function submitHandler(e){
    e.preventDefault();

    let x = Number(num.value);
    switch (op.value) {
        case "sqrt":  let sq = Math.sqrt(x);
        output.innerHTML = `<h1>Square root of ${x} = ${sq} </h1>`;
        break;

        case "cbrt":  let cb = Math.cbrt(x);
        output.innerHTML = `<h1>Cube root of ${x} = ${cb} </h1>`;
        break;

        default: output.innerHTML = `<h1>Choose vaild Operation</h1>`;
        break;
    }
}