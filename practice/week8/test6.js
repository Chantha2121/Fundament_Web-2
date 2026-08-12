let a = 10;
let b = 12;
let symbol = "/";

switch (symbol) {
  case '+':
    console.log('The a + b = ', a + b);
    break;
  case '-':
    console.log('The a - b = ', a - b);
    break;
  case '*':
    console.log('The a * b = ', a * b);
    break;
  case '/':
    console.log('The a / b = ', a / b);
    break;
  default:
    console.log("The symbol is incorrect");
}