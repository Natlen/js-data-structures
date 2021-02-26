const { triggerAsyncId } = require('async_hooks');
const BinarySearchTree = require('./binary-search-tree');
const tree = new BinarySearchTree();

        tree.insert(15); 
        tree.insert(25); 
        tree.insert(10); 
        tree.insert(7); 
        tree.insert(22); 
        tree.insert(17); 
        tree.insert(13); 
        tree.insert(5); 
        tree.insert(9); 
        tree.insert(27);

 
// console.log(tree.toString('preorder'));
// console.log(tree.toString('inorder'));
// console.log(tree.toString('postorder'));
tree.remove(5);
tree.remove(7);
tree.remove(15);
console.log(tree.toString('preorder'));
console.log(tree.search(10))
