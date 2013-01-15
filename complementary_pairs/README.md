# complementary_pairs

A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q) is called _K-complementary in array A_ if 0 <= P, Q < N, and A[P] + A[Q] = K.

For example, consider array A such that

    A[0] = 1    A[1] = 8    A[2] = -3
    A[3] = 0    A[4] = 1    A[5] = 3
    A[6] = -2   A[7] = 4    A[8] = 5

The following pairs are 6-complementary in array A: (0, 8), (1, 6), (4, 8), (5, 5), (6, 1), (8, 0), (8, 4). For instance, the pair (4, 8) is 6-complementary because A[4] + A[8] = 1 + 5 = 6.

## Running test case

1. Install mocha (`npm install mocha -g`). Make sure mocha is installed globally, since it's a CLI
2. Go to the directory `complementary_pairs` and rune the command `mocha test.js`