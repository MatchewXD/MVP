const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const db = require('./database');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Get Request Recieved')
})

app.get('/accounts', (req, res) => {
  console.log('GET Request Recieved');
  db.get((data) => {
    res.send(data);
  });
});

app.post('/accounts', (req, res) => {
  console.log('POST Request Recieved');
  db.save(req.body);
  res.send('Post Request Recieved');
});

app.put('/accounts', (req, res) => {
  console.log('Update Request Recieved');
  db.update(req.body);
  res.send('Update Request Recieved');
});

app.delete('/accounts', (req, res) => {
  console.log("Delete Requet Recieved");
  db.remove(req.body._id);
  res.send('Delete Request Recieved');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});