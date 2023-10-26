//An Object based design

// Node class constructor consists of two properties
// 1. element => which store's the node data
// 2. next => which store's a link to next node in the linked list

function Node(element) {
    this.element = element;
    this.next = null;
} 

function DoublyLinkedList() {
    this.head =new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.displayReverse = displayReverse;
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
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

// display() => this function will display the element of linked list
function display() {
    let currNode = this.head;
    while(!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

