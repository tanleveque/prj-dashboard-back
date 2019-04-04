const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const config = require('./config/database.config');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//test

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userRouter = require('./routes/user');
const artistRouter = require('./routes/artist');
const artistsRouter = require('./routes/artists');

//connection a la base de donnée
mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/users', usersRouter);
app.use('/artist', artistRouter);
app.use('/artists', artistsRouter);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });

module.exports = app;

