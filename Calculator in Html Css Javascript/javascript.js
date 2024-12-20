// Append value to the display
function appendValue(value) {
    const display = document.getElementById('calc-display');
    if (display.value === "0" || display.value === "Error!") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('calc-display').value = '0';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('calc-display');
    if (display.value.length === 1 || display.value === "Error!") {
        display.value = '0';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate the result
function calculate() {
    const display = document.getElementById('calc-display');
    try {
        // Using eval to evaluate the mathematical expression from the display
        display.value = eval(display.value) || '0';
    } catch (error) {
        // If there's an error (like invalid syntax), show 'Error'
        display.value = 'Error!';
    }
}
