const input = document.getElementsByClassName("input")[0];
const output = document.getElementsByClassName("output")[0];
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementsByClassName("clear")[0];
const decimalButton = document.getElementsByClassName("decimal")[0];
const backspaceButton = document.getElementsByClassName("backspace")[0];
const equalsButton = document.getElementsByClassName("equals")[0];

let previousNumber = "";
let currentOperator = "";
let currentNumber = "";
let solution = "";
let inputText = "";
let outputText = "";
let equalsWasPressed = false;
input.textContent = inputText;
output.textContent = outputText;

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
  if (b === 0) {
    alert("Don't divide by 0")
    clear();
    return;
  }
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
    inputNumber(numberButtons[i].textContent);
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    inputOperator(operatorButtons[i].textContent);
  });
}

clearButton.addEventListener("click", clear);

decimalButton.addEventListener("click", decimal);

backspaceButton.addEventListener("click", backspace);

equalsButton.addEventListener("click", equals);

function inputNumber(number) {
  if (equalsWasPressed) {
    clear();
  }
  if (currentNumber !== "0" && currentNumber.length < 9) {
    currentNumber += number;
  }
  inputText = previousNumber + " " + currentOperator + " " + currentNumber;
  input.textContent = inputText;
}

function inputOperator(operator) {
  equalsWasPressed = false;
  if (currentNumber.length > 12) {
    currentNumber = Number(currentNumber).toFixed(4);
  }
  if (previousNumber.length > 12) {
    previousNumber = Number(previousNumber).toFixed(4);
  }
  if (currentNumber !== "" || currentOperator !== "") {
    if (currentOperator === "") {
      previousNumber = currentNumber;
    } else if ((currentOperator === "*" || currentOperator === "/") && currentNumber === "") {
      inputText = previousNumber;
    } else {
      previousNumber = String(operate(previousNumber, currentOperator, currentNumber));
      if (previousNumber.length > 12) {
        previousNumber = Number(previousNumber).toFixed(4);
      }
      inputText = previousNumber;
    }
    currentNumber = "";
    currentOperator = operator;
    inputText = previousNumber + " " + currentOperator + " " + currentNumber;
    input.textContent = inputText;
    solution = previousNumber;
    if (solution.length > 12) {
      solution = Number(solution).toFixed(4);
    }
    output.textContent = solution;
  }
}

function clear() {
  input.textContent = "";
  output.textContent = "";
  inputDisplayValue = "";
  outputDisplayValue = "";
  previousNumber = "";
  currentNumber = "";
  currentOperator = "";
  solution = "";
  equalsWasPressed = false;
}

function decimal() {
  if (!currentNumber.includes(".") && !equalsWasPressed) {
    if (currentNumber === "") { currentNumber = "0"; }
    currentNumber += ".";
    inputText = previousNumber + " " + currentOperator + " " + currentNumber;
    input.textContent = inputText;
  }
}

function backspace() {
  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    inputText = previousNumber + " " + currentOperator + " " + currentNumber;
    input.textContent = inputText;
  }
}

function equals() {
  if (currentNumber !== "") {
    equalsWasPressed = true;
    if (currentNumber.length > 12) {
      currentNumber = Number(currentNumber).toFixed(4);
    }
    if (previousNumber.length > 12) {
      previousNumber = Number(previousNumber).toFixed(4);
    }
    solution = String(operate(previousNumber, currentOperator, currentNumber));
    if (solution.length > 12) {
      solution = Number(solution).toFixed(4);
    }
    output.textContent = solution
  }
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
      inputNumber(e.key);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      inputOperator(e.key);
      break;
    case "Enter":
    case "=":
      equals();
      break;
    case "c":
      clear();
      break;
    case "b":
    case "Backspace":
      backspace();
      break;
    case ".":
    case ",":
      decimal();
      break;
  }
}

window.addEventListener("keydown", pressKey);