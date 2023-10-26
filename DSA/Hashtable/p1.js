const names = ["David" , "John", "Donie", "Raymond", "Jenni", "Cyntia" , "Mike", "denny","nathan","Clayton"];

let hTable = new HashTable();

for(let i=0; i< names.length; i++) {
    hTable.put(names[i]);
}

// print the data
hTable.showDistro();