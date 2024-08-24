const display = document.querySelector('.input');
let memoryValue = 0; // Initialize memory value
function appendToDisplay(value) {
    if (value === 'x') {
        display.value += '*'; // Replace 'x' with '*' for multiplication
    } else {
        display.value += value;
    }
}

// Function to evaluate the expression on the display
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to handle memory addition (M+)
function addToMemory() {
    memoryValue += parseFloat(display.value) || 0;
    clearDisplay();
}

// Function to handle memory subtraction (M-)
function subtractFromMemory() {
    memoryValue -= parseFloat(display.value) || 0;
    clearDisplay();
}

// Function to apply percentage
function applyPercentage() {
    display.value = (parseFloat(display.value) / 100).toString();
}

// Add event listeners to the buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === 'M+') {
            addToMemory();
        } else if (value === 'M-') {
            subtractFromMemory();
        } else if (value === '%') {
            applyPercentage();
        } else {
            appendToDisplay(value);
        }
    });
});
