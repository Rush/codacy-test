console.log('Hello world');
const fs = require('fs');
fs.readFile('package.json', (err, data) => {
  console.log('Data', data);
  fs.readFile('package.json', (err2, data) => {
    console.log('Data', data);
  });
})
