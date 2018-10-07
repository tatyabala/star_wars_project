var express = require('express');

var app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine','ejs');
var routes = require('./routes');
 // routes
 //Home
app.get('/',routes.home);
// Movie_single
app.get  ('/star_wars_episode/:episode_number?',routes.movie_single); 
//not found
app.get('*',routes.notFound);
app.listen(process.env.PORT || 3000);



