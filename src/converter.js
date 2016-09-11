/**
 * Converts an equation in string format to an
 * equation in array format.
 * @method convertEquation
 * @param  {String} stringEquation Equation, in string format.
 * @return {Array} equation Equation, in array format.
 */
function convertEquation(stringEquation) {
    // Split the equation into individual characters.
    var splitEq = stringEquation.split('');

    var symbols = ['+', '-', '*', '/', '(', ')'];
    var currentNum = '';
    var equation = [];

    // Iterate over each character.
    for(var i = 0; i < splitEq.length; i++) {

        // If the character is a known symbol, add it to the equation.
        if(symbols.indexOf(splitEq[i]) > -1) {
            // If there was a queued number, add it first.
            if(currentNum) {
                equation.push(currentNum);
                currentNum = '';
            }
            equation.push(splitEq[i]);
        // Otherwise, concat the current number to the queue.
        } else {
            currentNum += splitEq[i];

            // If this was the last item in the equation,
            // add it to the equation.
            if(i === splitEq.length - 1) {
                equation.push(currentNum);
            }
        }
    }

    return equation;
}

/**
 * Parses an equation to determine if it is valid.
 * @method isValidEquation
 * @param  {Array} input Equation, in array format.
 * @return {Boolean}
 */
function isValidEquation(equation) {
    // The equation is expected in array format.
    if(!Array.isArray(equation)) {
        return false;
    }

    var bracketState = [];
    var lastItem = 'START';

    // Iterate over each part of the equation.
    for(var i = 0; i < equation.length; i++) {

        // Ensure each item is valid.
        switch(equation[i]) {
            case '(':
                // An opening bracket cannot come after ...
                if(lastItem === 'OPERAND') {
                    return false;
                }
                bracketState.push('(');
                lastItem = 'OPEN_BRACKET';
                break;
            case ')':
                // A closing bracket cannot be at the start of the equation or come after ...
                if(lastItem === 'START' || lastItem === 'OPERATOR') {
                    return false;
                }

                // Can't close more brackets than were opened.
                if(!bracketState.length) {
                    return false;
                }

                bracketState.pop();
                lastItem = 'CLOSE_BRACKET';
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                // An operator cannot come after ...
                if(lastItem === 'OPERATOR' || lastItem === 'OPEN_BRACKET' || lastItem === 'START') {
                    return false;
                }
                lastItem = 'OPERATOR';
                break;
            default:
                // An operand cannot come after ...
                if(lastItem === 'OPERAND' || lastItem === 'CLOSE_BRACKET') {
                    return false;
                }
                lastItem = 'OPERAND';
        }
    }

    // The last character of the equation can't be ...
    if(lastItem === 'OPEN_BRACKET' || lastItem === 'OPERATOR') {
        return false;
    }

    // All brakets should have been closed.
    if(bracketState.length) {
        return false;
    }

    // If every character is valid, the equation is valid.
    return true;
}

module.exports = {
    convertEquation: convertEquation,
    isValidEquation: isValidEquation
};
