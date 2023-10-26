let s1 = new Set();
let s2 = new Set();

s1.add("Red");
s1.add("Orange");
s1.add("Blue");

s2.add("White");
s2.add("Orange");
s2.add("Green");

let u1 = new Set(); // union

console.log('s1 =', s1.show());
console.log('s2 =', s2.show());

console.log(`\n`);

u1 = s1.union(s2);
console.log('u1 =', u1.show());

console.log(`\n`);
console.log(u1.show());
