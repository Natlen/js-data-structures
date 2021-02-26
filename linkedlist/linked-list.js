const Node = require('./node')
class LinkedList {

    constructor(data) { data == null? this.head = null:this.head = new Node(data)};

    insert(data) {
        if(data == null)
            return;
        if(this.head == null)
            this.head = new Node(data);
        else{
            let last = this.head;
            let next = this.head.next;
            while(next != null) {
                last = next;
                next = next.next;
            }
            next = new Node(data);
            last.next = next;
        }
    }
    remove(data) {
        if(data == null || this.head == null)
            return;
        let prev,placeholder = this.head;
        if(this.head.data == data)
        {
            this.head = this.head.next;
            return;
        }
        while(placeholder != null)
        {
            if(placeholder.data == data)
            {
                prev.next = placeholder.next;
                placeholder = null;
                return;
            }
            prev = placeholder;
            placeholder = placeholder.next;
        }
    }
    print() { let placeholder = this.head; while(placeholder !=null) { console.log(placeholder); placeholder = placeholder.next;}}
}

module.exports = LinkedList;