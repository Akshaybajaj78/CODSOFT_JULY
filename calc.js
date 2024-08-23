// Get all the button elements
const buttons = Array.from(document.querySelectorAll('.btn'));
const display = document.getElementById('display');

// Variable to store current input and operator
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay(value) {
    display.textContent = value || '0';
}

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay('0');
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                try {
                    const result = eval(`${previousInput} ${operator} ${currentInput}`);
                    updateDisplay(result);
                    currentInput = result;
                    previousInput = '';
                    operator = null;
                } catch {
                    updateDisplay('Error');
                }
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});
