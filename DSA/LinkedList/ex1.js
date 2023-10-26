let colors = new SinglelyLinkedList();

colors.insert("Red", "head");
colors.insert("Blue", "Red");
colors.insert("Green", "Blue");
colors.insert("Orange", "Green");

colors.display();

console.log('prev =', colors.findPrevious("Green"));
console.log('prev =', colors.findPrevious("Orange"));
console.log('prev =', colors.findPrevious("Red"));
console.log('prev =', colors.findPrevious("head"));
console.log(`\n`);

colors.remove("Green");
colors.display();
console.log(`\n`);


colors.remove("Red");
colors.display();
console.log(`\n`);


colors.remove("Blue");
colors.display();
console.log(`\n`);