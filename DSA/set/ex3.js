let s1 = new Set();
let s2 = new Set();

s1.add("Red");
s1.add("Orange");
s1.add("Blue");

s2.add("White");
s2.add("Orange");
s2.add("Green");

let i1 = s1.intersect(s2);

console.log("output after intersect =", i1.show());