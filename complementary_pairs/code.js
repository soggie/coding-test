module.exports = {
    complementary_pairs : function complementary_pairs(K, A) {
        'use strict';

        var P, Q, len, cnt, v1, v2;

        if (0 !== K * 0) {
            throw new Error('Expecting K to be a number: ' + K);
        }

        if (!(A instanceof Array)) {
            throw new Error('Expecting A to be an array: ' + A);
        }

        len = A.length;
        cnt = 0;

        for (P = len; P--;) {
            for (Q = len; Q--;) {
                if (A[P] + A[Q] === K) {
                    cnt++;
                }
            }
        }

        return cnt;
    }
};