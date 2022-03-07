const sum = (x, y) => (+x) + (+y);
const subtraction = (x, y) => +x - +y;
const multiplication = (x, y) => +x * +y
const split = (x, y) => +x / +y

const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false
    }
    return true
}

module.exports = {
    sum,
    subtraction,
    multiplication,
    split,
    validateNumbers
}