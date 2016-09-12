/**
 * Test cases for calculator.js.
 */
describe('calculator', function() {

    // Stub the function that solve uses.
    parser = {
        hasSubEquation: sinon.stub()
    };

    /**
     * Test cases for solve function.
     */
    describe('solve', function() {

        it('should return a simple equation\'s solution', function() {
            var equation = ['2', '+', '3'];
            var result = solve(equation);
            expect(result).to.eql(5);
        });

        it('should return a complex equation\'s solution', function() {
            var equation = ['(', '2', '+', '3', ')', '*', '(', '4', '/', '2', '+', '(', '6', '-', '2', ')', ')'];
            var result = solve(equation);
            expect(result).to.eql(30);
        });

    });

    /**
     * Test cases for solveSimple function.
     */
    describe('solveSimple', function() {

        it('should return an equation\'s solution', function() {
            var equation = ['2', '+', '3'];
            var result = solve(equation);
            expect(result).to.eql(5);
        });

    });

});
