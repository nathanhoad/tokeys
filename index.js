module.exports = function (array) {
    var i,
        object = {};
    
    for (i in array) {
        object[array[i]] = array[i];
    }
    
    return object;
};