let x = document.getElementById("num");

function submitHandler(event) {
    event.preventDefault();
    let val = Number(x.value);

    let n1 =0;
    let n2 =1;
    let nxt;

    console.log('fibonacci series \n');

    console.log(n1);
    console.log(n2);

    nxt = n1 + n2;

    while(nxt <= val) {
        console.log('nxt =', nxt);

        n1 = n2;
        n2 = nxt;
        nxt = n1 + n2;
    }


}