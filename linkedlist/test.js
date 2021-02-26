const LinkedList = require('./linked-list');
const fs = require('fs');
const FILE_NAME= "linkedlist.txt";
const list = new LinkedList();
list.remove();
for(let i=1; i<=10; i++)
    list.insert(i);

list.remove(3);
list.insert();
list.print();

async function write_file() {
    fs.writeFile(FILE_NAME, JSON.stringify(list), [], err => {
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