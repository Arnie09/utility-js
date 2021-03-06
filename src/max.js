const head = require('./head');

const max = (array) => {
    if (array.length == 0)
        return undefined;

    return maximizer(array, Number.MIN_SAFE_INTEGER);
}

const maximizer = (array,  MAX) => {
    if (array.length == 0) {
        return MAX;
    }

    var value = head(array);

    if (value > MAX){
        MAX = value;
    }

    array.shift();
    return maximizer(array, MAX);
}

module.exports = max;