module.exports = {
    complementary_pairs : function complementary_pairs(K, A) {
        'use strict';

        var P, Q, len, cnt, v1, v2;

        len = A.length;
        cnt = 0;

        for (P = len; P--;) {
            // P = A[P];

            for (Q = len; Q--;) {
                // Q = A[Q];
                if (P === Q) { continue; }

                v1 = A[P];
                v2 = A[Q];
process.stdout.write([v1, '+', v2, '=', v1 + v2].join(' '));
                if (v1 + v2 === K) {
                    cnt++;
process.stdout.write(' - counted');
                }
process.stdout.write('\n');
            }
        }

        return cnt;
    }
};