let result = document.getElementById('result');
let expression = '';

function clearResult() {
    expression = '';
    result.value = '';
}

function appendNumber(number) {
    expression += number;
    result.value += number;
}

function appendOperator(operator) {
    expression += operator;
    result.value += operator;
}

function calculate() {
    try {
        let res = eval(expression);
        result.value = res;
        expression = '';
    } catch (error) {
        result.value = 'Error';
    }
}
