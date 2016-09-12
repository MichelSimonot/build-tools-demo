/**
 * Checks whether the equation has a sub-equation.
 * @param  {Array}  equation
 * @return {Boolean}
 */
function hasSubEquation(equation) {
    var opening = equation.indexOf('(');
    var asd = equation.slice(opening);
    var closing = asd.indexOf(')');
    return opening > -1 && closing > -1;
}

/**
 * Finds a bracketed sub-equation within an array-equation.
 * @param  {Array} equation
 * @return {Object} subEquation Indices of the start and end of the sub-equation.
 */
function findSubEquation(equation) {
    var opener;
    var bracketState = [];

    for(var i = 0; i < equation.length; i++) {
        if(equation[i] === '(') {
            bracketState.push(i);

        } else if(equation[i] === ')') {
            opener = bracketState.pop();

            if(!bracketState.length) {
                return {
                    openBracket: opener,
                    closeBracket: i
                };
            }

        }
    }

    return false;
}

module.exports = {
    hasSubEquation: hasSubEquation,
    findSubEquation: findSubEquation
};
