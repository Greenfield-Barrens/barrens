const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/channels/barrens', (req, res) => {
  items.selectAll((err, data) => {
    err ? res.sendStatus(500) : res.json(data);
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
