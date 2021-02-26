const DoublyLinkedList = require('./doubly-linked-list');

const fs = require('fs');
const FILE_NAME = "doublylinkedlist.txt"


const list = new DoublyLinkedList();

for(let i=1; i <=10; i++)
    list.insert(i);
list.remove(10);
console.log(list.toString());

async function write_file() {
    fs.writeFile(FILE_NAME, list.toString(), [], err => {
        if(err) { console.log(err); }
    })
}
async function read_file() {
    return new Promise(res => {
        fs.readFile(FILE_NAME,'utf-8', (err, data) => {
            if(err) { console.log(err); }
            else { res(data)}
        })
    })
}

async function f() {
    await write_file();
    const a = await read_file();
    console.log(a);
}
f();