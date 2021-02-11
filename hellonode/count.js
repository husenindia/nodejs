module.exports.arraylength = function(arr){
    return (arr.length)
}
module.exports.sum = function(a,b) {
    return `Total of sum is: ${a+b}`;
}
/* Alternative: Module Patterns **********
var counter = function(arr){
    return (arr.length)
}
var sum = function(a,b) {
    return `Total of sum is: ${a+b}`;
}

module.exports = {
counter: counter,
sum:  sum,
}
*/