let color = new Set();

color.add("Red");
color.add("Green");
color.add("Blue");
color.add("Orange");
color.add("White");
color.add("Slate blue");
color.add("Silver");
color.add("Gold");

console.log('all value  = ', color.show());


if(color.add('gold')) {
    console.log('gold is added');
} else {
    console.log('gold color exists.');
}


if(color.add('black')) {
    console.log('black is added');
} else {
    console.log('black color exists.')
}

console.log("\n");
console.log('all value =', color.show());


console.log("\n");
console.log('remove Orange=', color.remove('Orange'));


console.log("\n");
console.log('all value =', color.show());


console.log("\n");
console.log('remove slateblue =', color.remove('slate blue'));


console.log("\n");
console.log('all value =', color.show());


