const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Descrbe tests
describe('Saving Records', function(){

//Create tests
it('Saves a record to the database', function(done){//Mocha gives us done parameter so it knows when you are done test


    var char = new MarioChar({

        name : "Mario"

    })

    char.save().then(function(){ 


        assert(char.isNew === false); // True if char is created But not saved to database. False if Char is created and saved to databsse

        done();

    }).catch(function(err){

        console.log("TEST ERROR: " + err);
    }); //save to database (Async)


});


});