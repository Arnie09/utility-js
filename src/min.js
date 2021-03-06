const head = require('./head');

const Min = (array) => {
    if (array.length == 0)
        return undefined;

    return Minimizer(array, Number.MAX_SAFE_INTEGER);
}

const Minimizer = (array,  MIN) => {
    if (array.length == 0) {
        return MIN;
    }

    var value = head(array);

    if (value < MIN){
        MIN = value;
    }

    array.shift();
    return Minimizer(array, MIN);
}

module.exports = Min;