// add two numbers 

function addTwoNumbers(number1, number2) {
    console.log(number1, number2)
    var total = number1 + number2
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber)
console.log(result)

// multiply two numbers 

function multiplyTwoNumber(num1, num2) {
    var result = num1 * num2
    return result;
}
var total = multiplyTwoNumber(5, 100)
console.log('total after multiplication', total)



// subtract two numbers 

function subtractTwoNumbers(number1, number2) {
    var total = number1 - number2;
    return total;
}

console.log(subtractTwoNumbers(45, 21))

// Quotient two numbers 
function QuotientTwoNumbers(number1, number2) {
    var total = number1 / number2
    return total;
}


console.log(QuotientTwoNumbers(9, 3))
