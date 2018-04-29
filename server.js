const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const book = require('./routes/api/book');
const auth = require('./routes/api/auth');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose
  .connect('mongodb://localhost/mern-secure', {
    promiseLibrary: require('bluebird')
  })
  .then(() => console.log('connection successful'))
  .catch(err => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(express.static('client/build'));

app.use('/api/book', book);
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
