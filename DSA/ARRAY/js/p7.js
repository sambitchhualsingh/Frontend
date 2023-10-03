

var names = ["David", "John", "Mike", "Albert", "John", "Sonu", "Raymond", "Jenni", "John", 
"Shan"];

var key = "John";

var fPos = names.indexOf(key);
var lPos = names.lastIndexOf(key);

console.log(`First found `, key , "at position ", fPos);
console.log(`Last found `, key , "at position ", lPos);

let res1 = names.join();

console.log('all values =', res1);
console.log('String format =', res1.toString());