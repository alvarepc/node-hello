const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!\n')
});

app.get('/ready', (req, res) => {
  res.send('READY\n');
});

app.get('/health', (req, res) => {
  res.send('OK\n');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!\n')
});
