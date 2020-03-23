const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  console.log('Hello from proxy server!')
})

app.use(express.static(path.join(__dirname, '/../public')));

app.listen(3002, () => {
  console.log('Server listening on port 3002');
});