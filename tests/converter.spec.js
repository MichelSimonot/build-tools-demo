var module = sinon.mock();

/**
 * Test cases for converter.js
 */
describe('converter', function() {

    /**
     * Test cases for convertEquation function.
     */
    describe('convertEquation', function() {

        it('should convert a string equation into an array equation', function() {
            var equation = '2+3';
            var result = convertEquation(equation);
            var expected = ['2', '+', '3'];
            expect(result).to.eql(expected);
        });

        it('should append adjacent numbers as a single array item', function() {
            var equation = '21+3';
            var expected = ['21', '+', '3'];
            expect(convertEquation(equation)).to.eql(expected);
        });

    });

    /**
     * Test cases for isValidEquation function.
     */
    describe('isValidEquation', function() {

        it('should return true for a valid equation', function(){
            var equation = ['2', '+', '3'];
            var result = isValidEquation(equation);
            expect(result).to.be.true;
        });

        it('should return false for invalid operators', function() {
            var equation1 = ['2', '+', '+', '3'];
            var equation2 = ['(', '+', '3', '+', '2', ')'];
            var equation3 = ['+', '3'];
            var equation4 = ['3', '+'];
            expect(isValidEquation(equation1)).to.be.false;
            expect(isValidEquation(equation2)).to.be.false;
            expect(isValidEquation(equation3)).to.be.false;
            expect(isValidEquation(equation4)).to.be.false;
        });

        it('should return false for invalid operands', function() {
            var equation1 = ['2', '2'];
            var equation2 = ['(', '2', ')', '2'];
            expect(isValidEquation(equation1)).to.be.false;
            expect(isValidEquation(equation2)).to.be.false;
        });

        it('should return false for invalid opening brackets', function() {
            var equation2 = ['2', '(', '2', '+', '3', ')'];
            var equation3 = ['2', '+', '3', '+', '('];
            expect(isValidEquation(equation2)).to.be.false;
            expect(isValidEquation(equation3)).to.be.false;
        });

        it('should return false for invalid closing brackets', function() {
            var equation1 = [')', '2', '+', '5'];
            var equation2 = ['2', '+', ')'];
            expect(isValidEquation(equation1)).to.be.false;
            expect(isValidEquation(equation2)).to.be.false;
        });

        it('should return false for uneven opening brackets', function() {
            var equation =  ['(', '(', '2', '+', '3', ')'];
            expect(isValidEquation(equation)).to.be.false;
        });

        it('should return false for uneven closing brackets', function() {
            var equation =  ['(', '2', '+', '3', ')', ')'];
            expect(isValidEquation(equation)).to.be.false;
        });

    });

});
