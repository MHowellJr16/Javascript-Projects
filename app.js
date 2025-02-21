/**
 * BEGINNER QUESTIONS
 */
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
// EIGHTH PROBLEM
function oppositeBoolean(realBoolean) {
    return !realBoolean
}
console.log(oppositeBoolean(false))
// NINTH PROBLEM
function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(null))
// TENTH PROBLEM
function calcRemainder(number1, number2) {
    return number1 % number2
}
console.log(calcRemainder(4,2))
// ELEVENTH PROBLEM
function isOdd(num) {
    return num % 2 !== 0 
}
console.log(isOdd(5))
// TWELFTH PROBLEM
function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}
console.log(booleanInteger(3))
// THIRTEENTH PROBLEM
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'Logged In') && (subscribed === 'Subscribed')
}
console.log(isLoggedInAndSubscribed('Logged In', 'Subscribed'))
// time stamp: 34:18
// FOURTEENTH PROBLEM
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return(loggedIn === 'Logged In') || (subscribed === 'Subscribed')
}
console.log(isLoggedInAndSubscribed('Logged In', 'Subscribed'))
/**
 * MEDIUM QUESTIONS
 */
// FIRST PROBLEM
function filterOutFalsy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2
}
console.log(filterOutFalsy(0 , 500))
// SECOND PROBLEM
// time stamp: 4:27
function arrLength(arr) {
   return arr.length
}
console.log(arrLength([1,2,3]))
// THIRD PROBLEM
function lastElem(arr) {
    return arr[arr.length -1]
}
console.log(lastElem([1,2,3,4]))
// FOURTH PROBLEM
function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(arrSum([1, 4, 6, 7]))
// FIFTH PROBLEM
// time stamp: 12:09
function progressiveSum(num) {
    let progSum = 0
    for (let i = 1; i <= num; i++) {
        progSum = progSum + i
    }
    return progSum
}
console.log(progressiveSum(5))
// SISXTH PROBLEM
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60
    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds
}
console.log(calcTime(80))
// SEVENTH PROBLEM
function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(getMax([100, 200, 300]))
// EIGhTH PROBLEM
function getReverse(str) {
    let reveredString = ""
    for (let i = 0; i < str.length; i++) {
    reveredString = str[i] + reveredString
    }
   return reveredString
}
console.log(getReverse('Mark'))
/** Can also use REVERSE ARRAY:
 * ".split('').reverse().join('')" */ 
function getSecondReverse(str) {
    return str.split('').reverse().join('')
}
console.log(getSecondReverse('Mark'))
//NINTH PROBLEM
function convertToZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0
    }
    return arr
}
console.log(convertToZeros([9, 2, 0]))
/**
 * Can use MAP
 */
function newConvertToZeros(arr) {
    return arr.map(elem => 0)
}
console.log(newConvertToZeros([1, 3, 4]))
// TENTH PROBLEM
// time stamp: 38:56
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'Apples') {
            noApples.push(arr[i])
        }
    }
    return noApples
}
console.log(removeApples(['Banannas', 'Apples', 'Pears']))
// Can also use 'ARRAY FILER'
function newRemoveApples(arr) {
    return arr.filter(elem => elem !== 'Apples')
}
console.log(newRemoveApples(['Apples', 'Pears', 'Oranges'])) // MUST use '[]'!!
// ELEVENTH PROBLEM
function filteringOutFalsy(arr) {
    return arr.filter(elem => !!elem === true) // Use "!!" when evalutating if TRUE or FALSE!
}
console.log(filteringOutFalsy([null, 0, '0', undefined]))
// TWEFLTH QUESTION
function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}
console.log(convertToBoolean([500, 0, undefined, 'Mark']))
// THIRTEENTH QUESTION
// HARD QUESTIONS
function showRating() {
    
}