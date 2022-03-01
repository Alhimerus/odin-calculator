let inputDisplayValue = "";
let outputDisplayValue = "";
let solution = 0;

const input = document.getElementsByClassName("input")[0];
const output = document.getElementsByClassName("output")[0];
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementsByClassName("clear")[0];
const decimalButton = document.getElementsByClassName("decimal")[0];
const backspaceButton = document.getElementsByClassName("backspace")[0];
const equalsButton = document.getElementsByClassName("equals")[0];

/* for (let i = 0; i < operatorButtons.length; i++) {
  console.log(operatorButtons[i].textContent);
} */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "No";
  return a / b;
}

function operate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    default:
      return "Wrong operator!";
  }
}

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    console.log(numberButtons[i].textContent);
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    console.log(operatorButtons[i].textContent);
  });
}

clearButton.addEventListener("click", () => {
  console.log(clearButton.textContent);
});

decimalButton.addEventListener("click", () => {
  console.log(decimalButton.textContent);
});

backspaceButton.addEventListener("click", () => {
  console.log(backspaceButton.textContent);
});

equalsButton.addEventListener("click", () => {
  console.log(equalsButton.textContent);
});