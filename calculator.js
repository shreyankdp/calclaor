let currentInput = '0';
let operator = '';
let previousInput = '';
let resultDisplayed = false;

const output = document.getElementById('output');

function updateOutput() {
    output.textContent = currentInput;
}

function clear() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateOutput();
}

function appendDigit(digit) {
    if (resultDisplayed) {
        clear();
        resultDisplayed = false;
    }

    if (currentInput === '0' || currentInput === '-0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateOutput();
}

function appendDecimal() {
    if (resultDisplayed) {
        clear();
        resultDisplayed = false;
    }

    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateOutput();
}

function toggleNegate() {
    if (currentInput !== '0' && currentInput !== '-0') {
        if (currentInput.charAt(0) === '-') {
            currentInput = currentInput.slice(1);
        } else {
            currentInput = '-' + currentInput;
        }
        updateOutput();
    }
}

function setOperator(newOperator) {
    if (operator !== '') {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operator = newOperator;
}

function calculate() {
    if (operator === '+') {
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
    } else if (operator === '-') {
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
    } else if (operator === '×') {
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
    } else if (operator === '÷') {
        if (currentInput === '0') {
            currentInput = 'Error';
        } else {
            currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        }
    }
    operator = '';
    previousInput = '';
    resultDisplayed = true;
    updateOutput();
}

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('negate').addEventListener('click', toggleNegate);
document.getElementById('percentage').addEventListener('click', () => {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateOutput();
});
document.getElementById('divide').addEventListener('click', () => setOperator('÷'));
document.getElementById('multiply').addEventListener('click', () => setOperator('×'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('decimal').addEventListener('click', appendDecimal);

// Attach click event listeners for digits 0-9
for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener('click', () => appendDigit(i.toString()));
}

updateOutput();
