const operations = require('./utils.js');
const assert = require('assert')

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.sum(1, 9), 10)
})
it('correctly calculates the sum of -1 and -1', () => {
    assert.equal(operations.sum(-5, -1), -6)
})
it('correctly calculates the difference of 33 and 3', () => {
    assert.equal(operations.subtraction(20, 5), 15)
})
it('correctly calculates the product of 12 and 12', () => {
    assert.equal(operations.multiplication(30, 30), 900)
})