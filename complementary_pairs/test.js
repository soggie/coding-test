var code, should;

code   = require('./code');
should = require('chai').should();

describe('complementary_pairs() test suite', function () {
    // goal - test sample results
    describe('- test sample results', function () {
        var K, A;

        K = 6;
        A = [1, 8, -3, 0, 1, 3, -2, 4, 5];

        it('should return a result of 7', function () {
            code.complementary_pairs(K, A).should.equal(7);
        });
    });

    // goal - make sure the parameters are of the right types
    describe('- test invalid K parameter', function () {
        it('should throw an exception', function () {
            (function () {
                code.complementary_pairs();
            }).should.throw(Error);
        });
    });

    describe('- test invalid A parameter', function () {
        it('should throw an exception', function () {
            (function () {
                code.complementary_pairs(1);
            }).should.throw(Error);
        });
    });
});