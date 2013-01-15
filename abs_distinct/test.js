var code, should;

code   = require('./code');
should = require('chai').should();

describe('absDistinct() test suite', function () {

    // goal - test the sample answers
    describe('- normal test with sample array', function () {
        var A = [-5, -3, -1, 0, 3, 6];

        it('should return 5 as a result', function () {
            code.absDistinct(A).should.equal(5);
        });
    });

    // goal - test if array can accommodate edge int values
    describe('- edge test with extreme case', function () {
        var A = [-2147483648, 2147483647];

        it('should return 2 as a result', function () {
            code.absDistinct(A).should.equal(2);
        });
    });

    // goal - test if function takes into account invalid params
    describe('- test invalid parameters', function () {
        it('should throw an exception', function () {
            (function () {
                code.absDistinct();
            }).should.throw(Error);
        });
    });

    // goal - test if elements that aren't numbers are discarded
    describe('- test non-number elements', function () {
        var A = ['listen', 'listen', 'listen', 5, 3];

        it('should return 2 as a result', function () {
            code.absDistinct(A).should.equal(2);
        });
    });
});