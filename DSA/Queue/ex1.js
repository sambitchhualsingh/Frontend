



// create instance to the queue constructor
let x = new Queue();

x.endQueue("Jenni");
x.endQueue("Albert");
x.endQueue("Cyntia");
x.endQueue("Margaret");
x.endQueue("Maria");

console.log('queue instance = ', x);

console.log('all values =', x.toString());

console.log('dequeue =', x.deQueue())
console.log('value =', x.toString());

console.log('Front of the queue =', x.front());
console.log('End of the queue = ', x.back());

console.log('dequeue =', x.deQueue());
console.log('value =', x.toString());

console.log('dequeue =', x.deQueue());
console.log('value =', x.toString());

console.log('dequeue =', x.deQueue());
console.log('value =', x.toString());