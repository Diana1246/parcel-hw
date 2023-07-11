const express = require('express');
const app = express();
 

 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

 
app.post('/submit', (req, res) => {
  res.send('Форма успішно відправлена!');
});
 