
let pbook = new Dictionary();

pbook.add("John", "111");
pbook.add("David", "345");
pbook.add("Mike", "567");

console.log("John's extension =" + pbook.find("John"));

console.log("David's extension =" + pbook.find("David"));

console.log("Mike's extension =" + pbook.find("Mike"));

console.log(`\n`);
pbook.showAll();

console.log(`\n`);
pbook.remove("David");

pbook.showAll();

console.log(`\n`);
pbook.add("Sonu" , "999");

pbook.showAll();

