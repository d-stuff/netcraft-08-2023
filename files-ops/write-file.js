const {writeFile} = require('fs')

const textToStore = (new Date()).toLocaleString()

writeFile('./demo.txt',textToStore, (err, content) => {
    console.log('saved');
})