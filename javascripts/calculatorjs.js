var num1, num2;

function calculator() {
  num1 = Number(window.prompt('Enter the first number.'));
  num2 = Number(window.prompt('Enter the second number.'));
  window.alert([['Addition result is ',num1 + num2,'. '].join(''),['Subtraction result is ',num1 - num2,'. '].join(''),['Multiplication result is',num1 * num2,'. '].join(''),['Division result is',num1 / num2,'. '].join(''),['Exponentation result is',Math.pow(num1, num2),'. '].join(''),['Root result is',Math.pow(num1, 1 / num2),'.'].join('')].join(''));
}
