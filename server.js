var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/todoDB');

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
console.log('App listening on port 3000');

require('./app/routes')(app);
