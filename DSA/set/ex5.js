let s1 = new Set();
let s2 = new Set();

s1.add("Red");
s1.add("Orange");
s1.add("Blue");

s2.add("White");
s2.add("Orange");
s2.add("Green");


let diff = new Set();
diff = s1.difference(s2);

console.log(`s1 = [${s1.show()}] difference s2 = [${s2.show()}] => [${diff.show()}]`);

diff = s2.difference(s1);

console.log(`s2 = [${s2.show()}] difference s1 = [${s1.show()}] => [${diff.show()}]`);