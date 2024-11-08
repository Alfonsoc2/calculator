const display = document.querySelector('.display');
let currentInput = '';

const buttons = document.querySelectorAll('button');

buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText >='0' && buttonText <= '9' || buttonText === ['+', '-', '*', '/'].includes(buttonText)) {
            currentInput += buttonText;
            display.textContent = currentInput
        }
    });
});