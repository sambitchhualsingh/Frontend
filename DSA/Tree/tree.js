
// key = this is key of the node
// value = the values
// parent = the parent node (nul -> only when their is no leaf nodes)


class Node {
    constructor(key,value=kay, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    // isLeaf => checks and returns the leaf node
    get isLeaf() {
        return this.children.length === 0;
    }

    // hasChildren => checks and returns the child nodes if exists
    get hasChildren() {
        return !this.isLeaf;
    }
}

class Tree {
    constructor(key,value =key) {
        this.root = new Node(key,value);
    }

    // generator function
    // traverses the tree by recursively traversing each node followed by its children
    *preOrderTraversal(node= this.root) {
        yield node;
        if( node.children.length) {
            for(let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    // traverses the tree by recursively traversing(each node's children followed by the node)
    *postOrderTraversal(node = this.root) {
        if(node.children.length) {
            for(let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    // insert => inserts a node as a child of the given parent
    insert(parentNodeKey, key, value = key) {
        for(let node of this.preOrderTraversal()) {
            if(node.key === parentNodeKey) {
                node.children.push(new Node(key,value,node));
                return true
            }
        }
        return false;
    }


    // remove => removes a node and it's children from the tree
    remove(key) {
        for(let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(item => item.key !== key);
            if(filtered.length !== node.children.lemgth) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }


    // find => used to retrives the given node
    find(key) {
        for(let node of this.preOrderTraversal()) {
            if(node.key === key) return node;
        }
        return undefined;
    }
}

