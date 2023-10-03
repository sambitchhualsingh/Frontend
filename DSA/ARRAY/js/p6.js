// Accessing arrays

var names = ["Sonu", "Venu" , "Mohan" , "David"];

let res = names.map(item => {
    return item;
});

console.log('output =', res);


let dom = document.getElementById("name");

let output = names.map((item) => {
        return `<li> My name is ${item} </li>`;
});

dom.innerHTML = output;