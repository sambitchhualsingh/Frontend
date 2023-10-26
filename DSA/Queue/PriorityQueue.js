function Queue() {
    this.dataStore = [];
    this.endQueue = endQueue;
    this.deQueue = deQueue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

// function used to add value to the queue
function endQueue(val) {
    this.dataStore.push(val);
}

// function used to remove value from the queue
function deQueue() {
        let priority = this.dataStore[0].code;
        for(let i=0; i < this.dataStore.length ; i++) {
            if(this.dataStore[i].code < priority) {
                priority = i;
            }
        }

    return this.dataStore.splice(priority,1);
}

// function to examine the elements from the begging and end
function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// function used to display all elements of the queue
function toString() {
    let retStr = "";
    for(i=0; i< this.dataStore.length; i++) {
        retStr += this.dataStore[i].name + " code=" + this.dataStore[i].code + "\n";

    }
    return retStr;
}

// empty the queue
function empty() {
    if(this.dataStore.length === 0) {
        return true;
    } else {
        return false
    }
}