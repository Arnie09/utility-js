const head = require('./head');

const reduce = (array, value) => {
    if (array.length == 0)
        return value;

    return reducer(array, value);
}

const reducer = (array, value) => {
    if (array.length == 0) {
        return value;
    }

    value += head(array);
    array.shift();
    return reducer(array, value);
}

module.exports = reduce;