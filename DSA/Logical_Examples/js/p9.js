let fInp =  document.getElementById("inp");
let out = document.getElementById("output");

function submitHandler(event) {
    event.preventDefault();
    let inp = fInp.value;

    let arr = inp.split('').reverse().join("");
    console.log('arr =', arr);
    out.innerHTML =  `<h1>input = ${inp} and output = ${arr} </h1>`;

}