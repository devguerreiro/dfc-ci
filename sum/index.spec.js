const sum = require("./index.js");

describe("Sum's tests", () => {
    it("should sum 10 plus 10 be equal to 20", () => {
        expect(sum(10, 10)).toBe(20); 
    })
})
