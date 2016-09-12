var converter = require('./converter');
var parser = require('./parser');

/**
 * Calculates the solution to a string equation.
 * @param  {String} input The equation, in string format.
 * @return {Number} answer The answer.
 */
function calculate(input) {
    var arrayEquation = converter.convertEquation(input);

    console.log('Equation: ', input);
    console.log('Array format: ', arrayEquation);
    console.log('Valid: ', converter.isValidEquation(arrayEquation));

    if(!converter.isValidEquation(arrayEquation)) {
        console.log('Error: Equation is invalid.');
        return;
    }

    var solution = solve(arrayEquation);
    console.log('Solution:', solution);
}

/**
 * Solves an array-equation.
 * @param  {Array} equation The equation, in array format.
 * @return {Number} answer The answer to the equation.
 */
function solve(equation) {
    // Base recursion case.
    // If there are no more brackets, solve it simply.
    if(!parser.hasSubEquation(equation)) {
        return solveSimple(equation);
    }

    // Find the sub-equation.
    var subEquationPos = parser.findSubEquation(equation);
    var subEquation = equation.slice(subEquationPos.openBracket + 1, subEquationPos.closeBracket);
    // Solve the sub-equation.
    var subAnswer = solve(subEquation);

    // Replace the sub-equation with its answer in the equation.
    var subLength = subEquationPos.closeBracket - subEquationPos.openBracket + 1;
    equation.splice(subEquationPos.openBracket, subLength, subAnswer);

    // Recurse to solve the simpler equation.
    return solve(equation);
}

/**
 * Solves a simple (no brackets) array-equation.
 * @param  {Array} equation The equation, in array format.
 * @return {Number} answer The answer to the equation.
 */
function solveSimple(equation) {
    return eval(equation.toString().replace(/,/g, ''));
}

module.exports = {
    calculate: calculate,
    solve: solve,
    solveSimple: solveSimple
};
