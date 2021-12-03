const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Get Request Recieved')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});