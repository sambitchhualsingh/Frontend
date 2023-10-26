

function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

// this function takes 2 params, a key and is the index for the value element
function add(key,val) {
    this.dataStore[key] = val;

}

// this function takes a key as its arrangement and  returns the value associated with it
function find(key) {
    return this.dataStore[key];
}

// removing a key-value pair from a dictionary involves using a built in javascript function: dalete
// this function is part of th object class and takes a reference to a key as its argument
function remove(key) {
    delete this.dataStore[key];
}

// we'd like to be able to view all the key-value pairs in a dictionary
function showAll() {
    let data = Object.keys(this.dataStore);
        data.forEach((item,key) => {
            console.log(` index = ${key} and key = ${item} and value = ${this.dataStore[item]}`);
        });
}