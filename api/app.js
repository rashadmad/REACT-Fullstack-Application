'use strict';

// Import cors library
const cors = require('cors');

//load Sequelize
const { sequelize } = require('./models');

// Get references to our models.
const Courses = require('./models').Course;
const Users = require('./models').Users;

// load modules
const express = require('express');
const morgan = require('morgan');

// set up routeing
const courseRoutes = require('./routes/courses.js');
const userRoutes = require('./routes/users.js');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

// Enable all CORS Requests
app.use(cors());

app.use(express.json());

// setup morgan which gives us http request logging
app.use(morgan('dev'));

app.use(userRoutes);
app.use(courseRoutes);

// Enable all CORS Requests
app.use(cors());


// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

(async () => {
  try {
    // Test the connection to the database
    await sequelize.authenticate();
    console.log('Connection to the database successful!');

  } catch(error) {
    console.log("database not running")
  }
})();

