let display = document.getElementById('display');
let currentValue = '';
let currentOperator = '';
let hasDot = false;

// Append numbers to the display
function appendNumber(number) {
    if (number === 0 && currentValue === '') return; // Prevent leading zeros
    currentValue += number;
    display.value = currentValue;
}

// Append operators to the display
function appendOperator(operator) {
    if (currentValue === '') return; // No operator without a number
    if (currentOperator) calculate(); // If an operator exists, calculate before proceeding
    currentOperator = operator;
    currentValue += operator;
    hasDot = false; // Reset decimal tracking for new numbers
    display.value = currentValue;
}

// Handle dot/decimal input
function appendDot() {
    if (hasDot) return; // Prevent multiple decimals
    if (currentValue === '') currentValue = '0'; // If empty, assume 0 before dot
    currentValue += '.';
    hasDot = true;
    display.value = currentValue;
}

// Clear the display
function clearDisplay() {
    currentValue = '';
    currentOperator = '';
    hasDot = false;
    display.value = '';
}

// Delete the last character
function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

// Perform calculation
function calculate() {
    try {
        currentValue = eval(currentValue).toString(); // Use eval to evaluate the expression
        display.value = currentValue;
        currentOperator = '';
        hasDot = currentValue.includes('.');
    } catch (error) {
        display.value = 'Error'; // Handle invalid expressions
        currentValue = '';
    }
}
