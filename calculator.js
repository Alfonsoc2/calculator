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
        // Clear input when 'C' is pressed
        else if (buttonText === 'clear') {
            currentInput = '';
            display.textContent = ''; // Clear the display
        }
        //to do fix the clear and clear all functions
    });
});
