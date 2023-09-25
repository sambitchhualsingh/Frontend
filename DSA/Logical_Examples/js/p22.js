let x = document.getElementById("num");

function submitHandler(event) {
    event.preventDefault();

    let val = Number(x.value);
    let len = Number(x.value.length);

    let sum =0;

    let tmp = num;

    while(tmp > 0) {
        let rem = tmp % 10;
        sum += rem ** len;

        tmp = parseInt(tmp/10);
    }

    if(sum === num) {
        console.log(`${num} is an Armstrong Number`);
        out.innerHTML = `<h1>${num} is an Armstrong Number</h1>`;
    } else {
        console.log(`${num} is not an Armstrong Number`);
        out.innerHTML = `<h1>${num} is not an Armstrong Number</h1>`;
    }
}