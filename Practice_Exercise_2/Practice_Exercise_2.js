function myOpertions() {
    let number1 = 20;
    let number2 = 5;

    let addition = 20 + 5;
    let subtraction = 20 - 5;
    let multiplication = 20 * 5;
    let division = 20 / 5;
    let remainder = 20 % 5;

    let output = `
    value1: ${number1}<br><br>
    value2: ${number2}<br><br>
    value1 + value2: ${addition}<br><br>
    value1 - value2: ${subtraction}<br><br>
    value1 * value2: ${multiplication}<br><br>
    value1 / value2: ${division}<br><br>
    value1 % value2: ${remainder}<br><br>`

    document.getElementById('exercise2-output').innerHTML = output;
}

function userOperations() {
    let num1 = Number(prompt('Enter your first number: '));
    let num2 = Number(prompt('Enter your second number: '));

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let remainder = num1 % num2;

    let output =`
    Perform Addition: ${addition}<br><br>
    Perform Subtraction: ${subtraction}<br><br>
    Perform Multiplication: ${multiplication}<br><br>
    Perform Division: ${division}<br><br>
    Perform Remainder: ${remainder}<br><br>
    `
    document.getElementById('exercise2-output').innerHTML = output
}