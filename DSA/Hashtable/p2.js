const names = ["David" , "John", "Donie", "Raymond", "Jenni", "Cyntia" , "Mike", "denny","nathan","Clayton"];

let hTable = new HashTable();

for(let i=0; i< names.length; i++) {
    hTable.put(names[i]);
}

console.log("\n");

// print the data
 hTable.showData();