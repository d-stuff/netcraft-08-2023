const {readFile, writeFile} = require('fs')

const textToStore = (new Date()).toLocaleString();
const read = () => {
    return new Promise((resolve, reject) => {
        readFile('./demo.txt', (err, content) => {
            !err && resolve(content);
            err && reject(content);
        })
    });
}

const write = (existingContent, newContent) => {
    const dataToStore = `${existingContent}\n${newContent}`;
    return new Promise((resolve, reject) => {
        writeFile('./demo.txt', dataToStore, (err, _) => {
            !err && resolve('success');
            err && reject('failed');
        })

    })
}


read().then(data=>{
    write(data,textToStore);
})

