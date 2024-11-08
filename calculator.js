const display = document.querySelector('.display');


const buttons = document.querySelectorAll('button');

buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        display.textContent = buttonText;
    });
});