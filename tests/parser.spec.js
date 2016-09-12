/**
 * Tests cases for parser.js.
 * @type {Array}
 */
describe('parser', function() {

    /**
     * Test cases for hasSubEquation function.
     */
    describe('hasSubEquation', function() {

        it('should return true if there is a set of brackets', function() {
            var equation = ['(', ')'];
            var result = hasSubEquation(equation);
            expect(result).to.be.true;
        });

        it('should return false if there is no set of brackets', function() {
            var equation1 = ['(', '2'];
            var equation2 = ['2', ')'];
            var result1 = hasSubEquation(equation1);
            var result2 = hasSubEquation(equation2);
            expect(result1).to.be.false;
            expect(result2).to.be.false;
        });

        it('should return false if there is no valid set of brackets', function() {
            var equation = [')', '('];
            var result = hasSubEquation(equation);
            expect(result).to.be.false;
        });

    });

    /**
     * Test cases for findSubEquation function.
     */
    describe('findSubEquation', function() {

        it('should return false if there are no brackets', function() {
            var equation = ['2', '+', '3'];
            var result = findSubEquation(equation);
            expect(result).to.be.false;
        });

        it('should return the bracket indices of a bracketed sub-equation', function() {
            var equation = ['2', '+', '(', '3', '*', '4', ')'];
            var result = findSubEquation(equation);
            var expected = {
                openBracket: 2,
                closeBracket: 6
            };
            expect(result).to.eql(expected);
        });

        it('should not return the "bottom-level" sub-equation', function() {
            var equation = ['1', '+', '(', '2', '+', '(', '3', '*', '4', ')', ')'];
            var result = findSubEquation(equation);
            var expected = {
                openBracket: 2,
                closeBracket: 10
            };
            expect(result).to.eql(expected);
        });

        it('should return the first sub-equation', function() {
            var equation = ['(', '2', '+', '3', ')', '+', '(', '3', '+', '4', ')'];
            var result = findSubEquation(equation);
            var expected = {
                openBracket: 0,
                closeBracket: 4
            };
            expect(result).to.eql(expected);
        });

    });

});
