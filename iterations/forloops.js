// for loops: if you want to repeat an operation a given number or times,
// or repeat them for each element in a collection



// loop over a range of numbers in javascript
// the function prints every number from 0 - num minus 1
function rangeofnums(num) {
    for (let i = 0; i < num; i++) {
        console.log(i)
    }
}
// console.log(rangeofnums(100))


array = [0, 1, 2, 4, 8, 16, 32]
function arrayforwards(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(array[i])
    }
}
// console.log(arrayforwards(array))

// loops BACKWARDS over a range of numbers
// the function prints every number from 0 plus 1 through num
function countbackwards(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}
// console.log(countbackwards(100))

//print elements in an array backwards
function arraybackwards(arr) {
    for (let i = arr.length; i >= 0; i--) {
        console.log(array[i])
    }
}
// console.log(arraybackwards(array))

// factorial - computes the factorial of num
// factorial of 5! = 1 * 2 * 3 * 4 * 5
// factorials start with 1

function factorial2(num) {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
        console.log(fact)
    }
    return fact
}
// console.log(factorial2(10))

// a triangle made of asterisks using a double for loop
// 
function triangle(num) {
    // initiate an empty string
    let triangle = ''

    //start i at 1 to save space and make sure one * is printed by dependent j
    // this for loop creates a row
    for (let i = 1; i <= num; i++) {
        // this for loop and a star to the row base on the value of parent i
        for (let j = 1; j <= i; j++) {
            triangle += '*'
        }
        //after the inner forloop completes, we create a new line
        triangle += '\n'
    }
    return triangle
}
// console.log(triangle(4))

//flips the triangle upside down
// highest num of * at top, descends
function triangle2(num) {
    // initiate an empty string
    let triangle = ''

    //start i at NUM
    // this for loop creates a row, num determines the number of loops by dependent j
    for (let i = num; i >= 1; i--) {
        // this for loop and a star to the row base on the value of parent i
        for (let j = 1; j <= i; j++) {
            triangle += '*' + ' '
        }
        //after the inner forloop completes, we create a new line
        triangle += '\n'
        // console.log(i)
    }
    return triangle
}
console.log(triangle2(4))

//symmetrical triangle

// the triange will have NUM rows, where num is some positive integer
// consecutive rows should contain 2n-1, 2n-3, ..., 3, 1 * and
// should be indented by 0, 2, 4, ..., 2(n-1) spaces
//n = 4 looks like:
/* 
* * * * * * *  row = 1, num of * = 2(4) - 1 = 7
  * * * * *    row = 2, num of * = 2(3) - 1 = 5
    * * *      row = 3, num of * = 2(2) - 1 = 3
      *        row = 4, num of * = 2(1) - 1 = 1
        */

function trianglesym(num) {
    let triangle = ''
    for (let i = num; i >= 1; i--) { // the tri will have NUM rows, descending
        for (let j = 1; j <= num - i; j++) { // prints the indentations
            triangle += '  ' // 2 spaces
            // console.log(triangle)
        }
        for (j = 1; j <= 2 * i - 1; j++) { // prints the asterisks
            triangle += '*' + ' ' // 1 space
            // console.log(triangle)
        }
        triangle += '\n'
        console.log(triangle)
    }
    return triangle
}
console.log(trianglesym(4))

// found on Quora. Solved spacing issue.
function printPyramid(numberofRows) {
    let outputBlock = "";
    for (let i = 1; i <= numberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            outputBlock += j + "     ";
        }
        console.log(outputBlock);
        outputBlock = "";
    }
}
// console.log(printPyramid(4))