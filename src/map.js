const head = require('./head');

const map = (array, func) => {
    if (array.length == 0)
        return array;

    var values = [];
    return mapper(array, func, values);
}

const mapper = (array, func, values) => {
    if (array.length == 0) {
        return values;
    }

    values.push(func(head(array)));
    array.shift();
    return mapper(array, func, values);
}


module.exports = map;