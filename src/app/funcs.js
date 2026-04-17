const display = document.getElementById('calc-view');
const buttonsContainer = document.getElementById('calc-buttons');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

document.getElementById("calc-buttons").addEventListener("click", function (event) {
    if (event.target.tagName !== 'BUTTON') return;

    const buttonValue = event.target.innerText;

    if (buttonValue === '=') {
        calculate();
    } else if (buttonValue === 'C') {
        clearDisplay();
    } else if (buttonValue === 'f') {
        display.value = fibonacci(parseInt(display.value));
    } else if (buttonValue === "f!") {
        display.value = factorial(parseInt(display.value));
    } else {
        appendToDisplay(buttonValue);
    }
});


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function fibonacci(num) {
    if (num <= 1) return 1;

    let a = 1;
    let b = 1;
    let result = 0;

    for (let i = 2; i <= num; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}

function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}