const {readFile} = require('fs')

readFile('./demo.txt', (err, content) => {
    console.log(content.toString());
})