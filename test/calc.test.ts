import * as mocha from 'mocha';
import * as chai from 'chai';
chai.should();

import Calc from '../src/calc';

describe('Calc', () => {
    describe('isEvent', () => {
        it('should return true for 0', () => {
            Calc.isEven(0).should.be.true;
        });

        it('should return false for 1', () => {
            Calc.isEven(1).should.be.false;
        });

        it('should return true for 2', () => {
            Calc.isEven(2).should.be.true;
        });

        it('should return false for -3', () => {
            Calc.isEven(-3).should.be.false;
        });
        it('should return true for -4', () => {
            Calc.isEven(-4).should.be.true;
        });
    });
});