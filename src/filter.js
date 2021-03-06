const head = require('./head');

const filter = (array, func) => {
    if (array.length == 0)
        return array;

    var values = [];
    return filterer(array, func, values);
}

const filterer = (array, func, values) => {
    if (array.length == 0) {
        return values;
    }
    var topvalue = head(array);

    if (func(topvalue)){
        values.push(topvalue);
    }
    array.shift();
    return filterer(array, func, values);
}


module.exports = filter;