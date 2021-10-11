// requiring .env-vars
require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cron = require('node-cron');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// configuring app depending on mode
switch(process.env.API_CONFIGURATION_MODE){
	case "LOCAL":
		// init routes
		var sensordataRouter = require('./routes/sensordata.routes.js');
		var dbVersionRouter = require('./routes/dbversions.routes');
		// mapping routes
		app.use('/api/sensordata', sensordataRouter);
		app.use('/api/dbversion', dbVersionRouter);
		break;
  	case "REMOTE":
		// init routes
		var userRouter = require('./routes/users.routes');
		var dataCollectionsRouter = require('./routes/dataCollections.routes');
		// mapping routes
		app.use('/api/users', userRouter);
		app.use('/api/dataCollection', dataCollectionsRouter);
		break;
    case "DEVELOPMENT":
		// init routes
		var sensordataRouter = require('./routes/sensordata.routes.js');
		var dbVersionRouter = require('./routes/dbversions.routes');
		var userRouter = require('./routes/users.routes');
		var dataCollectionsRouter = require('./routes/dataCollections.routes');
		// mapping routes
		app.use('/api/sensordata', sensordataRouter);
		app.use('/api/dbversion', dbVersionRouter);
		app.use('/api/users', userRouter);
		app.use('/api/dataCollection', dataCollectionsRouter);
		break;
    default:
    	// init routes
		var sensordataRouter = require('./routes/sensordata.routes.js');
		var dbVersionRouter = require('./routes/dbversions.routes');
		// mapping routes
		app.use('/api/sensordata', sensordataRouter);
		app.use('/api/users', userRouter);
		app.use('/api/dbversion', dbVersionRouter);
		break;
}

/**
 * Database connection
 */
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( () => {
    console.log("connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

/**
 * Scheduled Sync-Task
 */
cron.schedule('* * * * *', () => {
	var sync = require('./sync/db.sync')
	console.log('[SYNC-WORKFLOW] started Sync-Job at ' + new Date(Date.now()));
	sync.runRemoteSync()
		.then(res => {
			console.log("[SYNC-WORKFLOW] Sync-Job finished.");
		})
		.catch(error => {
			console.log("[SYNC-WORKFLOW] An error occured while trying to start the Sync-Job. " + error.message);
		});
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
