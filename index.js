console.log('Hello world');

fs.readFile('package.json', (err, data) => {
  console.log('Data', data);
})
