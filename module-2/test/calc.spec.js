const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator

    it("should have proper value");
    describe("add", ()=> {
        it("should exist", () =>{
            //Given
            const c  = calc(42);
            //When
            //Then
            expect(c.add).not.to.be.undefined;
        });

        it("should be able to add a number to the current value", ()=> {
            const c = calc(3);
            const result = c.add(5).v;
            expect(result).to.equal(8);
        });
    })
    describe("minus", ()=> {
        it("should exist", () =>{
            //Given
            const c  = calc(3);
            //When
            //Then
            expect(c.minus).not.to.be.undefined;
        });

        it("should be able to subsctract a number from the current value", ()=> {
            const c = calc(3);
            const result = c.minus(2).v;
            expect(result).to.equal(1);
        });
    })
    describe("divide", ()=> {
        it("should exist", () =>{
            //Given
            const c  = calc(3);
            //When
            //Then
            expect(c.divide).not.to.be.undefined;
        });

        it("should be able to perform a valid division", ()=> {
            const c = calc(10);
            const result = c.divide(2).v;
            expect(result).to.equal(5);
        });

        it("should be able to divide by 0", ()=> {
            const c = calc(142);
            expect(() => c.divide(0)).to.throw("Division");
        });
    })
});