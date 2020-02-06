const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Table = require('cli-table');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3000;

const bookRouter = require('./routes/bookRouter')();

const favicon = require('serve-favicon');
const path = require('path');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => {
  const Table = require('cli-table');
  const table = new Table({
    style: { head: ['blue'], border: ['blue'] }
  });

  table.push({ 'Running on': `http://localhost:${port}` });
  console.log(table.toString());
});
