var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/eventsModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eventsdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var routes = require('./api/routes/eventsRoutes','./api/routes/hostRoutes'); //importing route

var eventsRouter = require('./api/routes/eventsRoutes');
var hostRouter = require('./api/routes/hostRoutes');
eventsRouter(app); //register the route
hostRouter(app); 


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('Events RESTful API server started on: ' + port);