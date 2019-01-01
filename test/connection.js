const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;



//Connect to the db before test run
before(function(done){

    //Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo'); //If db doesn't exist then mongodb will create one.


    mongoose.connection.once('open', function(){ //Once connection is open fire this function

        console.log('Connection established, now make fireworks..');
        done();

    }).on('error', function(err){

        console.log('Connection Error: ' + err);

    });

   

})


//Drop the characters collection before each test

//Before each test
beforeEach(function(done){

//drop mariochars
mongoose.connection.collections.mariochars.drop().then(function(){


    done();

});




});