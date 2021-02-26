const { isContext } = require('vm');
const Node = require('./node');
class BinarySearchTree {
    constructor(data) { data == null ? this.root = null : this.root = new Node(data); }
    insert(data) {
        if(data == null)
            return null;
        if(this.root == null)
            this.root = new Node(data);
        else {
            (function insert_node(placeholder) {
                if(placeholder == null)
                    return null;
                if(data < placeholder.data)
                {
                    if(placeholder.left == null)
                        placeholder.left = new Node(data);
                    insert_node(placeholder.left);
                }
                else if (data > placeholder.data)
                {
                    if(placeholder.right == null)
                        placeholder.right = new Node(data);
                    insert_node(placeholder.right);
                }
            })(this.root);
        }
    }
    remove(data) {
        if(data == null)
            return;
        this.root = (function remove_node(placeholder, val) {
            if(placeholder == null)
                return null;
            if(val < placeholder.data)
                placeholder.left = remove_node(placeholder.left, val);
            else if(val > placeholder.data)
                placeholder.right = remove_node(placeholder.right, val);
            else {
                if(placeholder.left == null)
                {
                    const res = placeholder.right;
                    placeholder = null;
                    return res;
                }
                else if(placeholder.right == null)
                {
                    const res = placeholder.left;
                    placeholder = null;
                    return res;
                }
                let res = (function min_node(placeholder) {
                    if(placeholder.left == null)
                        return placeholder;
                    return min_node(placeholder.left);
                })(placeholder.right);
                placeholder.data = res.data;
                placeholder.right = remove_node(placeholder.right, res.data);
                
            }
            return placeholder;
        })(this.root, data);
        
    }
    search(data) {
        if(data == null)
            return null;
        return (function search_node(placeholder){
            if(placeholder == null)
                return;
            if(data < placeholder.data)
                return search_node(placeholder.left);
            else if (data > placeholder.data)
                return search_node(placeholder.right);
            return placeholder;
        })(this.root);
    }
    toString(ORDER_TYPE){
        let result_string = '';
        let is_valid = false;
        for(let valid_order of [null,'preorder','inorder','postorder'])
            if(valid_order === ORDER_TYPE)
                { is_valid = true; break; }
        is_valid == false ? ORDER_TYPE = 'inorder' : null;
        switch(ORDER_TYPE)
        {
            case 'preorder':
                (function preorder_scan(placeholder) {
                    if(placeholder == null)
                        return;
                    result_string += `data : ${placeholder.data}, left: ${placeholder.left != null ? placeholder.left.data : null}, right: ${placeholder.right != null ? placeholder.right.data : null}\n`;
                    preorder_scan(placeholder.left);
                    preorder_scan(placeholder.right);
                    })(this.root);
                break;
            case 'inorder':
                (function inorder_scan(placeholder) {
                    if(placeholder == null)
                        return;
                    inorder_scan(placeholder.left);
                    result_string += ` data : ${placeholder.data},\n left: ${placeholder.left != null ? placeholder.left.data : null}\n, right: ${placeholder.right != null ? placeholder.right.data : null}\n`;
                    inorder_scan(placeholder.right);
                })(this.root);
                break;
            case 'postorder':
                (function postorder_scan(placeholder) {
                    if(placeholder == null)
                        return;
                postorder_scan(placeholder.left);
                postorder_scan(placeholder.right);
                result_string += ` data : ${placeholder.data},\n left: ${placeholder.left != null ? placeholder.left.data : null}\n, right: ${placeholder.right != null ? placeholder.right.data : null}\n`;
                })(this.root);
                break;
                default: console.log(ORDER_TYPE)
        }
        return result_string;
    }
}
module.exports = BinarySearchTree;