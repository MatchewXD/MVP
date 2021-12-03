const express = require('express');
const app = express();
const port = 3000;

const db = require('./database');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Get Request Recieved')
})

app.get('/accounts', (req, res) => {
  console.log('GET request recieved');
  db.get((data) => {
    res.send(data);
  });
});

app.post('/accounts', (req, res) => {
  console.log('POST request recieved');
  db.save(req.body);
  res.send('Post Request Recieved');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});