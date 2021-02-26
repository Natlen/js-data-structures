const Node = require('./node');
class Stack {
    constructor(data) { data == null ? this.top = null : this.top = new Node(data); }
    push(data) {
        if(data == null)
            return;
        const new_node = new Node(data);
        if(this.top == null)
        {
            this.top = new_node;
            return;
        }
        let placeholder = this.top;
        this.top = new_node;
        this.top.bottom = placeholder;
    }
    pop(data) {
        if(this.top == null)
            return;
            let placeholder = this.top;
        if(data == null || this.top.data == data)
        {
            this.top = this.top.bottom;
            return placeholder.data;
        }
        let upper = placeholder;
        while(placeholder !=null) {
            if(placeholder.data == data)
            {
                upper.bottom = placeholder.bottom;
                return placeholder;
            }
            upper = placeholder;
            placeholder = placeholder.bottom;
        }
    }
    print() {
        let placeholder = this.top;
        while(placeholder != null)
        {
            console.log(placeholder);
            placeholder = placeholder.bottom;
        }
    }
}
module.exports = Stack;