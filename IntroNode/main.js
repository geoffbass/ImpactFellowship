//This code is going to be responsible for the exection of my other code.
const { someThing, x, y } = require('./utils')
const { readFile } = require('fs');

readFile('./stuff.txt', 'utf8', (err, data) => {
    if(err) console.log('ERROR', err);
    else {
        console.log(typeof data);    
    }
})

// Two Tasks - 20 minute 
// 1. Figure out how to sum up all the numbers in that text file.
// 2. Write a new utils file that has a function called findInitials. The findInitials function takes in a string of space separated words and returns initials of those words. 'Corey Green' --> 'CG'. Create a text file of line separated phrases and produce an array of all of the initials of those things.
/*
Happy Times
Thing Are Fun
Wow This Is Cool

['HT', 'TAF', 'WTIC']
*/


// const someThing = utils.someThing
// const { someThing, x, y } = utils
console.log(someThing);