# abs_distinct

A non-empty zero-indexed array A consisting of N numbers is given. The _absolute distinct count_ of this array is the number of distinct absolute values among the elements of the array.

For example, consider array A such that

    A[0] = -5   A[1] = -3   A[2] = -1
    A[3] = 0    A[4] = 3    A[5] = 6

The absolute distinct count of this array is 5, because there are 5 distinct absolute values among the elements of this array, namely 0, 1, 3, 5 and 6.

## Running test case

1. Install mocha (`npm install mocha -g`). Make sure mocha is installed globally, since it's a CLI
2. Go to the directory `abs_disctinct` and rune the command `mocha test.js`