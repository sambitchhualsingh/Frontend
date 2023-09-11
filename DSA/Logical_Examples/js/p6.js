function myForm(event) {
    event.preventDefault();
    let kme = parseFloat(document.getElementById('km').value);
    let out = document.getElementById('output');

    let res = kme * 0.6213;

    out.innerHTML = `<h1> Convert km to miles = ${res.toFixed(2)}</h1>`;
}