let pr = document.getElementById('pr');
let ti = document.getElementById('yr');
let rate = document.getElementById('rate');

let out  = document.getElementById('output');

function submitHandler(e) {
    e.preventDefault();

    let p = Number(pr.value);
    let t = Number(ti.value);
    let r = Number(rate.value);

    let a = (p * t * r) / 100;
    out.innerHTML = `<div>
                        <h1>Simple Interest = ${a} </h1>
                        <h3>Principle = ${p}</h3>
                        <h3>Rate of Interest = ${r}</h3>
                        <h3>Time (Years) = ${t}</h3>
                     </div>`;
}