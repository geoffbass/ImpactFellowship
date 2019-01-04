// let someThing = 'SOMETHING';
// let x = 5;
// let y = 10;

// module.exports = {
//     someThing, //someThing: someThing,
//     x: x,
//     y: y
// };

const convertToInitials = (phrase) => {
    //Hello There ['Hello', 'There']
    const arrOfWords = phrase.split(' ');
    // const firstLetters = arrOfWords.map((word) => {
    //     return word[0];
    // })
    //['Hello', 'There'] ==> ['H', 'T'];
    const firstLetters = arrOfWords.map(word => word[0])
        //['H', 'T'] => 'HT';
    const initials = firstLetters.join('');
    return initials;
}

module.exports = {
    convertToInitials
}