const display = document.querySelector('.display');
let currentInput = '';

const buttons = document.querySelectorAll('button');

buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Handle number and operator buttons
        if ((buttonText >= '0' && buttonText <= '9') || ['+', '-', '*', '/'].includes(buttonText)) {
            currentInput += buttonText;
            display.textContent = currentInput;
        }
        // Evaluate the expression when '=' is pressed
        else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput).toString(); // Evaluate and convert to string
                display.textContent = currentInput; // Display result
            } catch (error) {
                display.textContent = 'Error'; // Show error for invalid input
                currentInput = ''; // Reset input
            }
        }
        // Clear all input when 'Clear-all' is pressed
        else if (buttonText === 'Clear All') {
            currentInput = '';
            display.textContent = ''; // Clear the display
        }
        //clear last input when clear is presses
        else if (buttonText === 'Clear') {
            currentInput = currentInput.slice(0,-1);
            display.textContent = '';
        }
    });
});
