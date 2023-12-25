// 1. read the file content


// 2. add new line with the new content



const {readFile, writeFile} = require('fs')

readFile('./demo.txt', (err, content) => {
    if (err) {
        console.log('error!')
        return;
    }
    console.log(content.toString());
    const textToAdd = (new Date()).toLocaleString();

    const newContent = content.toString() + '\n' + textToAdd;

    writeFile('./demo.txt',newContent, (err, content) => {
        console.log('saved');
    })
})


// 3. convert to use promises + async-await
const readFilePromise = () => null
const writeFilePromise = () => null

// wanted:
const textToAdd = (new Date()).toLocaleString();
readFilePromise('./demo.txt')
    .then(content => writeFilePromise('./demo.txt', content + textToAdd))
    .then(() => console.log('saved'))

// 3.1 wanted with async-await:

const fileContent = await readFilePromise('./demo.txt')
console.log(fileContent)
// continue youself..