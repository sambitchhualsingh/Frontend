
function HashTable() {
    this.table = new Array(137);
    this.betterHash = betterHash;
    this.showData = showData;
    this.put = put;
}

// which place hte data into the hash table
function put(data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
}

// print the data from hash table
function showData() {
    let n = 0;
    this.table.forEach((item,index) => {
        if(this.table[index] !== undefined) {
            console.log(`${index} : ${this.table[index]}`);
        }
    });
}

// Horner's Method
function betterHash(data) {
    let H = 37;  // Horner's const (prime number)
    let total = 0;

    for(let i=0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
    }

    total = total % this.table.length;
    if(total < 0) {
        total += this.table.length -1;
    }
    console.log(`Hash Value =${data} -> ${total}`);
    return parseInt(total);
}