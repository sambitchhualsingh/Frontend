//A Constructor based design
// Node class constructor consists of two properties
// 1. element => which store's the node data
// 2. next => which store's a link to next node in the linked list

function Node(element) {
    this.element = element;
    this.next = null;
}

// the head node starts with its next property set to null
 function SinglelyLinkedList() {
    this.head =new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
 }

// to insert a new after an existing node, we first have to find the 'after' node.
// find() => searches through the linked list looking for the specific data.when data is found, the function returns the node storing the data. 

function find(item) {
    let currNode = this.head;
    while(currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

// inserting new nodes
function insert(newEle, item) {
    let newNode = new Node(newEle);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

// display the elements of the linked list
function display() {
    let currNode = this.head;
    while(!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

// in order to remove a node from linked list , we need to find the node that is just before the node we want to remove.

function findPrevious(item) {
    let currNode = this.head;
    while(!(currNode.next === null) && (currNode.next.element !== item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    let prevNode =  this.findPrevious(item);
    if(!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}