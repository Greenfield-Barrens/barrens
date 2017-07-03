const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db');

const { dummyChannels, dummyUsers, dummyMessages } = require('./dummyData');

const app = express();

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log('listening on port 8000!');
});

const io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('server is responding to different paths');
});

app.get('/api/messages/:lat/:long', (req, res) => {
  // figure out which region we're looking in
  //retrieve all messages that have been tagged with that region
  //retrieve all messages tagged with general'
  console.log(`receiving the initial GET request with coords ${req.params.lat}, ${req.params.long}`);
  //retrieve all messages tagged with the region corresponding to incoming coords
  // db.query('SELECT * from areas;', null, (err, results) => {
  //   if (err) {  
  //     console.log('err querying pg db:', err);
  //     res.sendStatus(500);
  //   }
  //   console.log('successfully got noe mission', results.rows[0].geom);
  //   const MissionNoeRegion = `ST_Polygon(ST_GeomFromText('LINESTRING(37.7453366 -122.4379927, 37.7481003 -122.415084, 37.76088 -122.4127313, 37.7607018 122.4360408, 37.7453366 -122.4379927)'), 4326)`;

  //   const aPointInMissionNoe = 'ST_SetSRID(ST_MakePoint(37.7531416, -122.4260732),4326)';
  //   db.query(`SELECT ST_Contains(${MissionNoeRegion}, ${aPointInMissionNoe});`, null, (err, resultsSTContains) => {
  //     if (err) {
  //       console.log('err executing ST_Contains:', err);
  //       res.sendStatus(500);
  //     }
  //     console.log('results of ST_Contains:', resultsSTContains);
  //     res.sendStatus(200);
  //   });    
  // });
  res.json(dummyMessages);
});

app.get('/api/:lat/:long/:channel', (req, res) => {
  //
});



app.get('/api/region/:lat/:long', (req, res) => {
  //retrieve region name based off lat and long
});

app.get('/hi', (req, res) => {
  res.send('hi');
});

// likely no posting messages route -- everything will happen in the socket

io.sockets.on('connection', (socket) => {
  console.log('a user has connected');
  socket.on('subscribe', (room) => {
    console.log('joining room', room);
    socket.join(room);
  });
  socket.on('unsubscribe', (room) => {
    console.log('leaving room', room);
    socket.leave(room);
  });
  socket.on('send', (data) => {
    console.log('received message', data);
    io.sockets.in(data.region).emit('message', data);
    // io.emit('message', data);
  });
});