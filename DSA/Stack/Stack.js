function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.length = length;
        this.clear = clear;
}


// push the new value into the stack
function push(val) {
    this.dataStore.push(val);
}


// pop the values from the stack
function pop() {
    return this.dataStore.pop();
}




// return length of stack
function length() {
    return this.dataStore.length;
}

// peak return last added value
function peek() {
    return this.dataStore[this.length()-1];
}

// clear the pointer
function clear(){
    this.top = 0;
}