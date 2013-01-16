module.exports = {
    absDistinct : function absDistinct(A) {
        'use strict';
        
        var hash, count;

        hash  = {};
        count = 0;

        if (!(A instanceof Array)) {
            throw new Error('Expecting an array for parameter A: ' + A);
        }

        A.forEach(function (value) {
            value = Math.abs(value);

            if (undefined === hash[value] && 0 === (value * 0)) {
                hash[value] = true;
                count++;
            }
        });

        return count;
    }
};