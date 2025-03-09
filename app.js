const express = require('express');
const path = require('path');
const cors = require('cors');
//const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

const app = express();

app.set('view engine', 'ejs');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/api/login', loginRouter);


module.exports = app;
