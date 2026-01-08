const display = document.getElementById('display');

function appendInput(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = '';
    }
    if (display.innerText === 'Error') {
        display.innerText = '';
    }
    
    const lastChar = display.innerText.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    if (operators.includes(lastChar) && operators.includes(value)) {
        return; 
    }

    display.innerText += value;
}


function clearDisplay() {
    display.innerText = '0';
}


function deleteLast() {
    if (display.innerText === 'Error' || display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}


function calculate() {
    try {
        let expression = display.innerText;
        
        let result = new Function('return ' + expression)();

        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(2));
        }

        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}