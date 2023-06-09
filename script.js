const calculatorscreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorscreen.value = number
}

let prevNumber =''
let calculationOperator =''
let currentNumber = '0'

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }       
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', () => {
    calculatePercentage();
});
const calculatePercentage = () => {
    let result = parseFloat(currentNumber)/100
    updateScreen(result)
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    } 
    calculationOperator = operator
    currentNumber = '0'     
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () =>{
    calculate()
    updateScreen(currentNumber)        
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () =>{
    clearAll()
    updateScreen(currentNumber)
})













