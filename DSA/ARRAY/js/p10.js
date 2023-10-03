// Itarator function

// array.forEach()


var n1 = ["raju", "Ali", "David", "Mike", "Sonu"];

//Non-Array generating iterator

n1.forEach((item) => {
    console.log('item =', item);
});


const res = n1.map((item) => {
    return `<li>Hi, ${item} Welcome to dsa concept</li>`
});

console.log('res =', res);

let emps = document.getElementById("emp");

emps.innerHTML += res;