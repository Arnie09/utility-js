const tail = (array) => {
    if (array.length == 0)
        return undefined;
        
    return array[array.length-1];   
}
module.exports = tail;