module.exports = function (array, value_prefix) {
    if (typeof value_prefix === "undefined") value_prefix = "";
    
    var i,
        object = {};
    
    for (i in array) {
        object[array[i]] = value_prefix + array[i];
    }
    
    return object;
};