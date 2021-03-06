const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const http = require("http");
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
const PORT = process.env.PORT || 8080;
console.log(`open on port ${PORT}`);
app.listen(PORT);

//Ping Server Every 5 min
// setInterval(function() {
//     http.get("https://jad-burger-app.herokuapp.com").then(function(res){
//         if(res){
//             console.log("still alive");
//         }else {
//             console.log("ping failed");
//         }
//     });
// }, (60000*5));