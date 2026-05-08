var number_1, number_2;


number_1 = Number(window.prompt('Enter the first number.'));
number_2 = Number(window.prompt('Enter the second number.'));
window.alert(String(String('The addition is ' + String(String(number_1 + number_2) + '. ')) + String(String('The subtraction is ' + String(String(number_1 - number_2) + '. ')) + String('The multiplication is' + String(String(number_1 * number_2) + '. ')))) + String(String('The division is' + String(String(number_1 / number_2) + '. ')) + String(String('The exponentation is' + String(String(Math.pow(number_1, number_2)) + '. ')) + String('The rooting is' + String(String(Math.pow(number_1, 1 / number_2)) + '. ')))));
