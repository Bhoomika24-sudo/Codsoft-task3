let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = currentInput;
    } else {
        calculateResult();
    }
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;

    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }

    document.getElementById('display').value = result;
    firstOperand = result.toString();
    operator = '';
    currentInput = '';
}
