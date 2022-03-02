let inputDisplayValue = "";
let outputDisplayValue = "";
let previousNumber = "";
let currentNumber = "";
let currentOperator = "";
let solution = "";

const input = document.getElementsByClassName("input")[0];
const output = document.getElementsByClassName("output")[0];
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementsByClassName("clear")[0];
const decimalButton = document.getElementsByClassName("decimal")[0];
const backspaceButton = document.getElementsByClassName("backspace")[0];
const equalsButton = document.getElementsByClassName("equals")[0];

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
  number1 = Number(number1);
  number2 = Number(number2);
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
    if (currentNumber.length < 9 && currentNumber !== "0") {
      inputDisplayValue += numberButtons[i].textContent;
      currentNumber += numberButtons[i].textContent;
    } else if (currentNumber === "0" && !previousNumber) {
      inputDisplayValue = numberButtons[i].textContent;
      currentNumber = numberButtons[i].textContent;
    } else {
      currentNumber = currentNumber.slice(0, currentNumber.length - 1);
      inputDisplayValue = inputDisplayValue.slice(0, inputDisplayValue.length - 1);
      inputDisplayValue += numberButtons[i].textContent;
      currentNumber += numberButtons[i].textContent;
    }
    input.textContent = inputDisplayValue;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    if (currentNumber !== "" || currentOperator !== "") {
      if (currentOperator === "") {
        previousNumber = currentNumber;
      } else if ((currentOperator === "*" || currentOperator === "/") && currentNumber === "") {
        previousNumber = operate(previousNumber, currentOperator, 1);
        inputDisplayValue = previousNumber;
      } else {
        previousNumber = operate(previousNumber, currentOperator, currentNumber);
        inputDisplayValue = previousNumber;
      }
      currentNumber = "";
      currentOperator = operatorButtons[i].textContent;
      inputDisplayValue += ` ${operatorButtons[i].textContent} `;
      input.textContent = inputDisplayValue;
      solution = previousNumber;
      output.textContent = solution;
    }
  });
}

clearButton.addEventListener("click", clear);

decimalButton.addEventListener("click", decimal);

backspaceButton.addEventListener("click", backspace);

equalsButton.addEventListener("click", equals);

function clear() {
  input.textContent = "0";
  output.textContent = "0";
  inputDisplayValue = "";
  outputDisplayValue = "";
  previousNumber = "";
  currentNumber = "";
  currentOperator = "";
  solution = "";
}

function decimal() {
  if (!currentNumber.includes(".") && currentNumber !== "") {
    currentNumber += ".";
    inputDisplayValue += ".";
    input.textContent = inputDisplayValue;
  }
}

function backspace() {
  if (currentNumber.length > 0) {
  currentNumber = currentNumber.slice(0, currentNumber.length - 1);
  inputDisplayValue = inputDisplayValue.slice(0, inputDisplayValue.length - 1);
  if (inputDisplayValue === "") {
    inputDisplayValue = "0";
  }
  input.textContent = inputDisplayValue;
}
}

function equals() {
  solution = operate(previousNumber, currentOperator, currentNumber);
  output.textContent = solution;
}

function pressKey(e) {
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      console.log(e.key + " " + "Number!");
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      console.log(e.key + " " + "Operator!");
      break;
    case "Enter":
    case "=":
      console.log(e.key + " " + "Equals!");
      break;
    case "c":
      console.log(e.key + " " + "Clear!");
      break;
    case "b":
    case "Backspace":
      console.log(e.key + " " + "Backspace!");
      break;
    case ".":
    case ",":
      console.log(e.key + " " + "Decimal!");
      break;
  }
}

window.addEventListener("keydown", pressKey);