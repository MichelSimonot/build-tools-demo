var converter = require('./converter');

function calculate(input) {
    var arrayEquation = converter.convertEquation(input);

    console.log('Equation: ', input);
    console.log('Array format: ', arrayEquation);
    console.log('Valid: ', converter.isValidEquation(arrayEquation));
}

module.exports = calculate;
