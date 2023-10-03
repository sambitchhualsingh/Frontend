var n1 = ["red", "blue", "green"];
var n2 = ["cyan", "magnet", "yellow"];
var n3 = ["white", "black", "skyblue"];

var res1 = n1.concat(n2);

var res2 = [...n1, ...n2, ...n3];

console.log('res 1=', res1);
console.log('res 2=', res2);