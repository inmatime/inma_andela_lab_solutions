(function() {

 'use strict';

var chai = require('chai');
var expect = chai.expect;


var myApp = require('../Lab/isPrime.js');


 describe('Get the prime number from n to num in a List: ', function () {



   describe('Return the an array of prime number within the range of the 0 and the number supplied as argument ', function () {



     it('should return [ 2, 3, 5] for 6', function () {

       expect(myApp.getPrimes(6)).to.eql([2, 3, 5]);

     });



     it('should return [2] for 2', function () {

       expect(myApp.getPrimes(2)).to.eql([2]);

     });





   });






 });



})();

