function Patient(name,code) {
    this.name = name;
    this.code = code;
}

let q = new Queue();
let x1 = new Patient("Smitha", 5);
    q.endQueue(x1);

let x2 = new Patient("John", 3);
    q.endQueue(x2);

let x3 = new Patient("Raju", 2);
    q.endQueue(x3);

let x4 = new Patient("Mohan", 4);
    q.endQueue(x4);

let x5 = new Patient("Suma", 1);
    q.endQueue(x5);


   // responses
console.log('all values =', q.toString());

var seen = q.deQueue();
console.log('patient to be treated first =', seen[0].name);
console.log('patient waiting to be seen:');
  console.log(q.toString());

  var seen = q.deQueue();
console.log('patient to be treated first =', seen[0].name);
console.log('patient waiting to be seen:');
  console.log(q.toString());

  var seen = q.deQueue();
console.log('patient to be treated first =', seen[0].name);
console.log('patient waiting to be seen:');
  console.log(q.toString());

  var seen = q.deQueue();
console.log('patient to be treated first =', seen[0].name);
console.log('patient waiting to be seen:');
  console.log(q.toString());

  var seen = q.deQueue();
console.log('patient to be treated first =', seen[0].name);
console.log('patient waiting to be seen:');
  console.log(q.toString());

