// FIRST PROBLEM
function addition(num1, num2) {
    return num1 + num2 // ALWAYS USE 'RETURN'
}
console.log(addition(3,5))
// SECOND PROBLEM
function hoursIntoSeconds(hour) {
    return hour * 3600
}
console.log(hoursIntoSeconds(2))
// THIRD PROBLEM
function calcPerimiter(length, width) {
    return (2 * length) + (2 * width) // Still Operate under PEMDAS
}
console.log(calcPerimiter(20, 10))
// FOURTH PROBLEM
function calcTriangelArea(base, height) {
    return 0.5 * (base * height)
}
console.log(calcTriangelArea(3, 2))
// FIFTH PROBLEM
function appendFrontend(string) {
    return string + 'FrontEnd'
}
console.log(appendFrontend('Apple'))
// SIXTH PROBLEM
function sumGreaterThan100(num1, num2) {
    return num1 + num2 >= 100  
}
/**
 * Above statement is a BOOLEAN, will Return True or False regardless
 * NO need for 'IF' STATEMENT
 */
console.log(sumGreaterThan100(20,10))
// SEVENTH PROBLEM
function lessThanOrEqualToZero(num) {
    return num <= 0
}
console.log(lessThanOrEqualToZero(3))
// time stamp: 15:19


