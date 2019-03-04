const assert = require('chai').assert;
const myAwesomeUtil = require('./myAwesomeUtil');

describe('myAwesomeUtil', () => {
    "use strict";
    describe('#findMoreThanHalfNumber()', () => {
        it('should return target number when there is number appeared more than half times', () => {
            //given
            const arr = [7,2,4,8,2,2,2,2];
            //when
            const num = myAwesomeUtil.findMoreThanHalfNumber(arr);
            //then
            assert.strictEqual(num, 2);
        });

        it('should return undefined when no number appeared more than half times', () => {
            //given
            const arr = [7,2,4,8,2,1,2,9];
            //when
            const num = myAwesomeUtil.findMoreThanHalfNumber(arr);
            //then
            assert.isUndefined(num);
        });

        it('should return target number when there is only one number in array', () => {
            //given
            const arr = [7];
            //when
            const num = myAwesomeUtil.findMoreThanHalfNumber(arr);
            //then
            assert.strictEqual(num, 7);
        });

        it('should return undefined when input is empty array', () => {
            //given
            const arr = [];
            //when
            const num = myAwesomeUtil.findMoreThanHalfNumber(arr);
            //then
            assert.isUndefined(num);
        });

        it('should return undefined when input is not an array', () => {
            //given
            const arr = {};
            //when
            const num = myAwesomeUtil.findMoreThanHalfNumber(arr);
            //then
            assert.isUndefined(num);
        });
    });

    describe('#strToInt()', () => {
        it('should return parsed number when input is number string', () => {
            //given
            const str = '123';
            //when
            const num = myAwesomeUtil.strToInt(str);
            //then
            assert.strictEqual(num, 123);
        });

        it('should return negative number when input number string starts with -', () => {
            //given
            const str = '-6789';
            //when
            const num = myAwesomeUtil.strToInt(str);
            //then
            assert.strictEqual(num, -6789);
        });

        it('should return positive number when input number string starts with +', () => {
            //given
            const str = '+6789';
            //when
            const num = myAwesomeUtil.strToInt(str);
            //then
            assert.strictEqual(num, 6789);
        });

        it('should return NaN when input is not number string', () => {
            //given
            const str = 'abcd';
            //when
            const num = myAwesomeUtil.strToInt(str);
            //then
            assert.isTrue(Number.isNaN(num));
        });

        it('should return NaN when input is not string', () => {
            //given
            const str = {};
            //when
            const num = myAwesomeUtil.strToInt(str);
            //then
            assert.isTrue(Number.isNaN(num));
        });
    });
});