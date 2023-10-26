

const t = new Tree(1, 'AB');

console.log(`instance =`, t);

// insert the children's to the tree
t.insert(1,11,'AC');
t.insert(1,12,'BC');

t.insert(12,121,'BG');

console.log(`preorder traversal =`, t.preOrderTraversal());

let val = [...t.preOrderTraversal()]
console.log(`preorder traversal values =`, val);

