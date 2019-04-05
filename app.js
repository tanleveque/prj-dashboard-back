const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const config = require('./config/database.config');
const bodyParser = require('body-parser');
const cors = require('cors');1

const artistsRouter = require('./dashboard.route');

//connection a la base de donnée
mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/artists', artistsRouter);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });

module.exports = app;

