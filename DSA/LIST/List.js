
function List() {
    // properties
    this.dataStore = [];  // store list element
    this.listSize = 0;   // list size (Number of elements in the list)
    this.pos = 0;         // current position
    this.insert = insert;  // insert the values into the data store
    this.find = find;      // finding the value position
    this.append = append;   // append new element into the data store
    this.remove = remove;   // to remove the value
    this.length = length;    // length  of data store (list)
    this.clear = clear;      // it clears all value
    this.contains = contains;  // used to check wheather value isw present or not
    this.toString = toString;  // view the values present tn data store
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
}

// insert an element into the list
function insert(element,after) {
    let insertPos = this.find(after);
    if(insepo > -1) {
        this.dataStore.splice(insertPos+1, 0 , element);
        this.listSize++;
        return true;
    }
    return false;
}

// apends new element onto the list at new availble position
function append(element) {
    this.dataStore[this.listSize++] = element;
}


// finding the element position and return index of it
function find(element) {
    for(var i=0; i < this.dataStore.length.)
}





//prev position
function prev() {
    if(this.pos > 0) {
        this.pos--;
    }
}

// next position
function next() {
    if(this.pos < this.listSize -1) {
        this.pos++;
    }
 }

// current position 
function currPos() {
    return this.pos;

}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}