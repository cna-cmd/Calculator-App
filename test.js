const operations = require('./utils.js');
const assert = require('assert')

it('Correctly calculates the sum of 1 and 9', () => {
    assert.equal(operations.sum(1, 9), 10)
})

it('Correctly calculates the sum of -5 and -1', () => {
    assert.equal(operations.sum(-5, -1), -6)
})

it('Correctly calculates the difference of 20 and 5', () => {
    assert.equal(operations.subtraction(20, 5), 15)
})

it('Correctly calculates the product of 30 and 30', () => {
    assert.equal(operations.multiplication(30, 30), 900)
})

it('Correctly calculates the quotient of 15 and 3', () => {
    assert.equal(operations.split(15, 3), 5)
})

it('Failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('sammy', 5), false)
})

it('Failure when two strings is used instead of numbers', () => {
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false)
})

it('successfully runs when two numbers are used', () => {
    assert.equal(operations.validateNumbers(2, 2), true)
})