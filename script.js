const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator(-,+,*,/)');

let result = 0;
if (isNaN(number1) || isNaN(number2)) {
  alert('Invalid Input. Refresh the page and provide valid input');
}
else {
  if (operator == '-') {
    result = number1 - number2;
  } else if (operator == '+') {
    result = number1 + number2;
  } else if (operator == '*') {
    result = number1 * number2;
  } else if (operator == '/') {
    result = number1 / number2;
  }
}
document.write(number1 + operator + number2 + ' = ' + result);