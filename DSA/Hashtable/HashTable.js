// object => collection of data (key-value) pairs. map, dictionary and hash tables

function HashTable() {
    this.table = new Array(137); /* 137 is a prime number which decides the size of an array */
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    // this.get = get;
}

// which place the data into the hash table
function put(data) {
    let pos = this.simpleHash(data);
    this.table[pos] = data;
}

/* a simple hash function thas at first glance  seems to work well to sum the ASCII value of the letters in the key. The hash value is then that sum module the array size */

function simpleHash(data) {
    let total = 0;
    for(let i=0; i < data.length; ++i) {
        total += data.charCodeAt(i); // str.charCodeAt(i) / return ascii = decimal
    }
    console.log(`Hash value: ${data} -> ${total}`);
    return total % this.table.length;
}

// print the data from hash table.
function showDistro() {
    let n = 0;
    for(let i=0; i < this.table.length; ++i) {
        if(this.table[i] !== undefined) {
            console.log(`${i} : ${this.table[i]}`);
        }
    }
}