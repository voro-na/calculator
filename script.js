const userInput = document.getElementById("input");
let expression = '';
userInput.onkeydown = function (event) {
    console.log(event.key);
    if (event.key === 'Enter')
        equal();
    if (event.key === '%')
        expression += '*0.01';
    if ((event.key >= '0' && event.key <= '9') || event.key === '+' || event.key === '*' || event.key === '/' || event.key == '-' ||
        event.key === '(' || event.key === ')') {
        expression += event.key;
        //console.log(expression);
    }
}

function input(temp) {
    console.log(temp)
}

function press(num) {
    if (num === '%') {
        expression += '*0.01';
        userInput.value = expression;
    } else {
        expression += num;
        userInput.value = expression;
    }
}

function equal() {
    let result = eval(expression);

    userInput.value = (result === Infinity) ? 'Error: division by zero' : result;
    expression = '';
}

function clean() {
    expression = '';
    userInput.value = expression;
}