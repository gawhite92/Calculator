let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";
let result = "";
let lastStoredResult = "";

let secondNumberToggle = false;
let newCalculationToggle = false;


const buttons = document.querySelectorAll("button");    //10 numbers buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (newCalculationToggle === true) {           // Checks if you have already pressed '=' (completed a calculation) and clears the top screen section if true.
            textDisplayTop.textContent = ""
            newCalculationToggle = false;
        }
        if (secondNumberToggle === false) {
            return firstNumber += (button.id), result += (button.id), textDisplayBottom.textContent = `${result}`;
        } else {
            return secondNumber += (button.id), result += (button.id), textDisplayBottom.textContent = `${result}`;
        }
    })})

//Decimal button (Demical place - adds '.' string to active number)

const buttonDecimal = document.querySelector("#buttonDecimal");
buttonDecimal.addEventListener("click", () => {
    if (secondNumberToggle === false) {
        return firstNumber += ".", result += ".", textDisplayBottom.textContent = `${result}`;
    } else {
        return secondNumber += ".", result += ".", textDisplayBottom.textContent = `${result}`;
    }
});

//Equals button (resultCalculate FUNCTION)

const buttonEquals = document.querySelector("#buttonEquals");
buttonEquals.addEventListener("click", () => {
    operate();
    textDisplayBottom.textContent = `${result}`;
    textDisplayTop.textContent = `${displayValue}`;
    firstNumber = ""
    operator = ""
    secondNumber = ""
    displayValue = ""
    result = ""
    secondNumberToggle = false;
    newCalculationToggle = true;
  })

//Clear button (resetCalc FUNCTION)

const buttonClear = document.querySelector("#buttonClear"); ///////////////////////
buttonClear.addEventListener("click", () => {
    resetCalc();
});

//Undo button (undoStep FUNCTION)

const buttonUndo = document.querySelector("#buttonUndo");
buttonUndo.addEventListener("click", () => {
    alert("Undo");
});

//4 operators (above FUNCTIONS)

const buttonAdd = document.querySelector("#buttonAdd");
buttonAdd.addEventListener("click", () => {
    toggleSecondNumber();
    if (secondNumber === "") {
        operator = "+", displayValue += `${firstNumber} + `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    } else {
        operator = "+", displayValue += `${secondNumber} + `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    }
});

const buttonSubtract = document.querySelector("#buttonSubtract");
buttonSubtract.addEventListener("click", () => {
    toggleSecondNumber();
    if (secondNumber === "") {
        return operator = "-", displayValue += `${firstNumber} - `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    } else {
        return operator = "-", displayValue += `${secondNumber} - `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    }
});

const buttonMultiply = document.querySelector("#buttonMultiply");
buttonMultiply.addEventListener("click", () => {
    toggleSecondNumber();
    if (secondNumber === "") {
        return operator = "*", displayValue += `${firstNumber} X `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    } else {
        return operator = "*", displayValue += `${secondNumber} X `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    }
});

const buttonDivide = document.querySelector("#buttonDivide");
buttonDivide.addEventListener("click", () => {
    toggleSecondNumber();
    if (secondNumber === "") {
        return operator = "/", displayValue += `${firstNumber} / `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    } else {
        return operator = "/", displayValue += `${secondNumber} / `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
    }
});

//1 display screen (displayValue VARIABLE)
const textDisplayTop = document.querySelector("#textDisplayTop");
textDisplayTop.textContent = `${displayValue}`;

const textDisplayBottom = document.querySelector("#textDisplayBottom");
textDisplayBottom.textContent = `${result}`;


//FUNCTIONS
function toggleSecondNumber() {
    if (secondNumberToggle === true) {
        return secondNumberToggle = false;
    } else {
        return secondNumberToggle = true;
    }
}

function add() {
    return result = parseInt(firstNumber) + parseInt(secondNumber), textDisplayBottom.textContent = `${result}`;
}

function subtract() {
    return result = parseInt(firstNumber) - parseInt(secondNumber), textDisplayBottom.textContent = `${result}`;
}

function multiply() {
    return result = parseInt(firstNumber) * parseInt(secondNumber), textDisplayBottom.textContent = `${result}`;
}

function divide() {
    return result = parseInt(firstNumber) / parseInt(secondNumber), textDisplayBottom.textContent = `${result}`;
}

function operate() {
    if (operator === "+") {
        add();
        displayValue += `${secondNumber}` + " =";
        textDisplayTop.textContent = `${displayValue}`
        return lastStoredResult = result;
    } else if (operator === "*") {
        multiply();
        displayValue += `${secondNumber}` + " =";;
        textDisplayTop.textContent = `${displayValue}`
        return lastStoredResult = result;
    }
    else if (operator === "-") {
        subtract();
        displayValue += `${secondNumber}` + " =";;
        textDisplayTop.textContent = `${displayValue}`
        return lastStoredResult = result;
    }
    else if (operator === "/") {
        divide();
        displayValue += `${secondNumber}` + " =";;
        textDisplayTop.textContent = `${displayValue}`
        return lastStoredResult = result;
    }
}

function resetCalc() {
    firstNumber = ""
    operator = ""
    secondNumber = ""
    displayValue = ""
    result = ""
    textDisplayBottom.textContent = `${result}`;
    textDisplayTop.textContent = `${displayValue}`;
    secondNumberToggle = false;
    return;
}

//undoStep = *need to research how to do this. Save state at each step for undo function?? Press undo - revert to last state???*

//Press button 1 - stores in firstNumber and displayValue as string
//Press button 2,3,4,5,DECIMALPLACE,etc - adds to above values as string
//Press operator - Updates operator value and runs operatorSelect function.

