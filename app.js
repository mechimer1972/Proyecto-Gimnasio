var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var IndexRouter = require('./routes/Index');
var usersRouter = require('./routes/users');
var cañitasRouter = require('./routes/cañitas');
var cardalesRouter = require('./routes/cardales');
var contactoRouter = require('./routes/contacto');
var descuentosRouter = require('./routes/descuentos');
var lomitasRouter = require('./routes/lomitas');
var nosotrosRouter = require('./routes/nosotros');
var novedadesRouter = require('./routes/novedades');
var nuevas_clasesRouter = require('./routes/nuevas_clases');
var productosRouter = require('./routes/productos');
var sedesRouter = require('./routes/sedes');
var serviciosRouter = require('./routes/servicios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', IndexRouter);
app.use('/users', usersRouter);
app.use('/cañitas', cañitasRouter);
app.use('/cardales', cardalesRouter);
app.use('/contacto', contactoRouter);
app.use('/descuentos', descuentosRouter);
app.use('/lomitas', lomitasRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/novedades', novedadesRouter);
app.use('/nuevas_clases', nuevas_clasesRouter);
app.use('/productos', productosRouter);
app.use('/sedes', sedesRouter);
app.use('/servicios', serviciosRouter);


app.get('/', function (req, res) {
  res.send('Index');
});
app.get('/cañitas', function (req, res) {
  res.send('cañitas');
});
app.get('/cardales', function (req, res) {
  res.send('cardales');
});
app.get('/contacto', function (req, res) {
  res.render('contacto');
});
app.get('/descuentos', function (req, res) {
  res.send('descuentos');
});
app.get('/lomitas', function (req, res) {
  res.send('lomitas');
});
app.get('/nosotros', function (req, res) {
  res.send('nosotros');
});
app.get('/novedades', function (req, res) {
  res.send('novedades');
});
app.get('/nuevas_clases', function (req, res) {
  res.send('nuevas_clases');
});
app.get('/productos', function (req, res) {
  res.send('productos');
});
app.get('/sedes', function (req, res) {
  res.send('sedes');
});
app.get('/servicios', function (req, res) {
  res.send('servicios');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
require('dotenv').config();
