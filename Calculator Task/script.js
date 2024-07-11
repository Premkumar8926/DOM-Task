document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("result");

    const buttons = [
        { id: 'memoryClear', text: 'MC' }, { id: 'memoryAdd', text: 'M+' }, { id: 'memorySubtract', text: 'M-' }, { id: 'clear', text: 'C' },
        { id: '7', text: '7' }, { id: '8', text: '8' }, { id: '9', text: '9' }, { id: 'divide', text: '/' },
        { id: '4', text: '4' }, { id: '5', text: '5' }, { id: '6', text: '6' }, { id: 'multiply', text: '*' },
        { id: '1', text: '1' }, { id: '2', text: '2' }, { id: '3', text: '3' }, { id: 'subtract', text: '-' },
        { id: '0', text: '0' }, { id: 'decimal', text: '.' }, { id: 'equal', text: '=' }, { id: 'add', text: '+' }
    ];

    let currentInput = '';
    let memory = 0;

    buttons.forEach(button => {
        const buttonElement = document.getElementById(button.id);
        buttonElement.addEventListener('click', () => handleButtonClick(button.text));
    });

    document.addEventListener('keydown', (e) => {
        if (!isNaN(e.key) || e.key === '.') {
            handleButtonClick(e.key);
        } else {
            alert("Only numbers are allowed");
        }
    });

    function handleButtonClick(button) {
        if (!isNaN(button) || button === '.') {
            currentInput += button;
            display.value = currentInput;
        } else if (button === 'C') {
            currentInput = '';
            display.value = '0';
        } else if (button === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = 'Error';
                currentInput = '';
            }
        } else if (button === 'M+') {
            memory += parseFloat(currentInput || '0');
        } else if (button === 'M-') {
            memory -= parseFloat(currentInput || '0');
        } else if (button === 'MC') {
            memory = 0;
        } else {
            currentInput += ` ${button} `;
            display.value = currentInput;
        }
    }
});
