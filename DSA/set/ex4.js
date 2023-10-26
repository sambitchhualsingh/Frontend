let s1 = new Set();
s1.add("Gold");
s1.add("Silver");
s1.add("Iron");
s1.add("Aluminium");
s1.add("Nickle");


let s2 = new Set();
s2.add("Steel");
s2.add("Iron");
s2.add("Gold");
s2.add("Cast Iron");

if(s2.subset(s1)) {
    console.log(`s2 is a subset of s1`);
} else {
    console.log(`s2 is not a subset of s1`);
}

s2.add("Tungstun");
s2.add("Brass");

if(s2.subset(s1)) {
    console.log(`s2 is a subset of s1`);
} else {
    console.log(`s2 is not a subset of s1`);
}