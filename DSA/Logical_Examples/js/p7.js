let fyr = document.getElementById("yr");
let out = document.getElementById("output");


function submitHandler(event) {
    event.preventDefault();

    let y = Number(fyr.value);

    if((y % 4 === 0) && (y % 100 !== 0) && (y % 400 === 0)) {
        out.innerHTML = `<h2>${y} year is leap year </h2>`;
    } else {
        out.innerHTML = `<h2>${y} year is not leap year </h2>`;
    }
}