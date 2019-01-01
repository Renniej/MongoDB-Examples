const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Descrbe tests
describe('Finding Records', function(){

    var char;
    
    beforeEach(function(done){
         char = new MarioChar({

            name : "Mario"

        })

        char.save().then(function(){ 

            done();

        }).catch(function(err){

            console.log("TEST ERROR: " + err);
        }); //save to database (Async)

})

//Create tests
it('Find one  record  by name from the database', function(done){//Mocha gives us done parameter so it knows when you are done test

        MarioChar.findOne({name : 'Mario'}).then(function(result){

            assert(result.name === 'Mario');
            done()
        }).catch(function(err){
            console.log("Test Error: " + err);
        }); //default = return all reords
   
});

it ('Find one record by ID from the database', function(done){

    MarioChar.findOne({_id: char._id}).then(function(result){


            assert(result._id.toString() === char._id.toString()); // Have to use toString() because _id isn't a string but an object.  Result._id & char._id are not he same in that case
            done();

    }).catch(function(err){

        console.log("ERROR ERROR: " + err);
    });


});


});