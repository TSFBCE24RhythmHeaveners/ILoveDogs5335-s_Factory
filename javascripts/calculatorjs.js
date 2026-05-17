var number_1, number_2;

function calculator() {
  number_1 = Number(window.prompt('Enter the first number.'));
  number_2 = Number(window.prompt('Enter the second number.'));
  window.alert(['Addition result: ' + String(number_1 + number_2),'. Subtraction result: ' + String(number_1 - number_2),'. Multiplication result: ' + String(number_1 * number_2),'. Division result: ' + String(number_1 / number_2),'. Exponentation result: ' + String(Math.pow(number_1, number_2)),['. Root result: ',Math.pow(number_1, 1 / number_2),'.'].join('')].join(''));
}
