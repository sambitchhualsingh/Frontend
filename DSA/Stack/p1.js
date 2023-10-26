let s = new Stack();

s.push("David");
s.push("Raymond");
s.push("Brayn");
s.push("Rohi");

console.log('instance =', s);
console.log('length =', s.length());

console.log('peek =', s.peek());

s.push("Mohan");
console.log('length =', s.length());
console.log('peek = ', s.peek());

s.push("John");
console.log('length =', s.length());
console.log('peek =', s.peek());

console.log('length =', s.length());
console.log('pop =', s.pop());

console.log('length =', s.length());
console.log('pop =', s.pop());

console.log('length =', s.length());
console.log('pop =', s.pop());

