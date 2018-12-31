const mongoose = require('mongoose');



//Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo'); //If db doesn't exist then mongodb will create one.


mongoose.connection.once('open', function(){ //Once connection is open fire this function

    console.log('Connection established, now make fireworks..');
}).on('error', function(err){

    console.log('Connection Error: ' + err);

});