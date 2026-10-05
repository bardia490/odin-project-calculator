// takes the operation and applies it to num1 and num2
function applyOperation(op, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (op) {
        case "+":
            return num1+num2
        case "-":
            return num1-num2
        case "*":
            return num1*num2
        case "/":
            if (num2 === 0) {
                return "cannot divide by zero"
            }
            return num1/num2
        case "%":
            if (num2 === 0) {
                return "cannot divide by zero"
            }
            return num1%num2
        default:
            return "Please Choose an operator"
    }
}

function equalButtonPressed() {
    const num1 = first_number.value;
    const num2 = second_number.value;
    const op = operation.value;
    // 1. Check for empty inputs
    if (num1 === "" || num2 === "") {
        displayResult("Please enter both numbers");
        return;
    }
    result = applyOperation(op, num1, num2)
    displayResult(result)
}

function displayResult(result) {
    result_display.textContent = result
}

function resetDisplay() {
    result_display.textContent = "0"
    first_number.value = "";
    second_number.value = "";
    operation.value = "";
}

const first_number = document.querySelector("#first_number");
const second_number = document.querySelector("#second_number");
const operation = document.querySelector("#operation");
const result_display = document.querySelector("#result_display");
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

equalBtn.addEventListener('click', function () {
    equalButtonPressed();
});


clearBtn.addEventListener('click', function () {
    resetDisplay();
});
