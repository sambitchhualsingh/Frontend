let op = document.getElementById("op");
let out = document.getElementById("output");

function selHandler() {
    let val = op.value;
     //console.log('val =', val);
    switch (val) {
        case "square":
            let a = prompt("Enter a side value?");
            let area = areaSquare(Number(a));
            console.log('output = ', area);
            out.innerText = `Area of square = ${area} units`;
            break;

        case "circle":

            let r = prompt("Enter r value?");
            let area1 = areaCircle(Number(r)); 
            console.log('output =', area1);
            out.innerText = `Area of Circle = ${area1} units`;
            break;

        case "rect":
            let l = prompt("Enter length value?");
            let b = prompt("Enter base value?");
            let area2 = findArea(Number(l,b));
            out.innerText = `Area of Rectangle = ${l * b} units`;
            break;
        
        case "tri":
            let b1 = prompt("enter length value?");
            let h = prompt("enter height value?");
            let area3 = areaTriangle(Number(b1,h));
            out.innerText = `Area of Triangle = ${1/2 * b1 * h} units`;
            break;

        default:
            output.innerText = `Choose proper shapes`;
            break;
    }
}

//functions

function areaSquare(a) {
    return a * a; 
}

function areaCircle(r) {
    let pie_value = Math.PI;
    return (pie_value * r * r);
}


function findArea(l,b) {
    return (l * b);
}

function areaTriangle(b1,h) {
    return(1/2 * b1 * h );
}
