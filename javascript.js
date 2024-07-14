///////////////////////////////////////////////// VARIABLES /////////////////////////////////////////////////

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";
let result = "";
let lastStoredResult = "";

let secondNumberToggle = false;
let newCalculationToggle = false;

///////////////////////////////////////////////// BUTTONS /////////////////////////////////////////////////

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (newCalculationToggle === true) {   // Checks if you have just pressed '=' (completed a calculation) and clears the top screen section if true. Immediately changes flag back to false after.
            textDisplayTop.textContent = ""
            newCalculationToggle = false;
        }
        if (secondNumberToggle === false) {
            return firstNumber += (button.id), result += (button.id), textDisplayBottom.textContent = `${result}`;
        } else {
            return secondNumber += (button.id), result += (button.id), textDisplayBottom.textContent = `${result}`;
        }
    })
})

//Decimal button (Demical place - adds '.' string to active number)

const buttonDecimal = document.querySelector("#buttonDecimal");
buttonDecimal.addEventListener("click", () => {
    if (result.includes(".")) {
        return alert("Not possible")    // Only allows one decimal place per entry
    } else {
        if (secondNumberToggle === false) {
            return firstNumber += ".", result += ".", textDisplayBottom.textContent = `${result}`;
        } else {
            return secondNumber += ".", result += ".", textDisplayBottom.textContent = `${result}`;
        }
    }
});

//Equals button (resultCalculate FUNCTION)

const buttonEquals = document.querySelector("#buttonEquals");
buttonEquals.addEventListener("click", () => {
    if (firstNumber === "" && secondNumber === "") {
        return alert("Not possible");
    }
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
    return
})

//Clear button (resetCalc FUNCTION)

const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener("click", () => {
    resetCalc();
    return
});

//Undo button (undoStep FUNCTION)

const buttonUndo = document.querySelector("#buttonUndo");
buttonUndo.addEventListener("click", () => {
    alert("Undo");
    return
});

//4 operator buttons

const buttonAdd = document.querySelector("#buttonAdd");
buttonAdd.addEventListener("click", () => {
    if (firstNumber === "") { // Stops assigning operator with no firstNumber
        return alert("Not possible");
    } else {
        if (operator != "") { // There is a firstNumber, but with an existing operator
            operateMultiple();
            firstNumber = result;
            secondNumber = "";
            return operator = "+", displayValue = `${firstNumber} + `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
        } else { //There is a firstNumber, but no existing operator
            secondNumberToggle = true;
            operator = "+";
            if (secondNumber === "") {
                return operator = "+", displayValue += `${firstNumber} + `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
            }
        }
    }
});

const buttonSubtract = document.querySelector("#buttonSubtract");
buttonSubtract.addEventListener("click", () => {
    if (firstNumber === "") { // Stops assigning operator with no firstNumber
        return alert("Not possible");
    } else {
        if (operator != "") { // There is a firstNumber, but with an existing operator
            operateMultiple();
            firstNumber = result;
            secondNumber = "";
            return operator = "-", displayValue = `${firstNumber} - `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
        } else { //There is a firstNumber, but no existing operator
            secondNumberToggle = true;
            operator = "-";
            if (secondNumber === "") {
                return operator = "-", displayValue += `${firstNumber} - `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
            }
        }
    }
});

const buttonMultiply = document.querySelector("#buttonMultiply");
buttonMultiply.addEventListener("click", () => {
    if (firstNumber === "") { // Stops assigning operator with no firstNumber
        return alert("Not possible");
    } else {
        if (operator != "") { // There is a firstNumber, but with an existing operator
            operateMultiple();
            firstNumber = result;
            secondNumber = "";
            return operator = "*", displayValue = `${firstNumber} X `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
        } else { //There is a firstNumber, but no existing operator
            secondNumberToggle = true;
            operator = "*";
            if (secondNumber === "") {
                return operator = "*", displayValue += `${firstNumber} X `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
            }
        }
    }
});

const buttonDivide = document.querySelector("#buttonDivide");
buttonDivide.addEventListener("click", () => {
    if (firstNumber === "") { // Stops assigning operator with no firstNumber
        return alert("Not possible");
    } else {
        if (operator != "") { // There is a firstNumber, but with an existing operator
            operateMultiple();
            firstNumber = result;
            secondNumber = "";
            return operator = "/", displayValue = `${firstNumber} / `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
        } else { //There is a firstNumber, but no existing operator
            secondNumberToggle = true;
            operator = "/";
            if (secondNumber === "") {
                return operator = "/", displayValue += `${firstNumber} / `, textDisplayTop.textContent = `${displayValue}`, textDisplayBottom.textContent = `${result}`, result = "";
            }
        }
    }
});

///////////////////////////////////////////////// DISPLAY /////////////////////////////////////////////////

//Top line (calculation parts)
const textDisplayTop = document.querySelector("#textDisplayTop");
textDisplayTop.textContent = `${displayValue}`;
//Bottom line (result, OR the current selected number)
const textDisplayBottom = document.querySelector("#textDisplayBottom");
textDisplayBottom.textContent = `${result}`;


///////////////////////////////////////////////// FUNCTIONS /////////////////////////////////////////////////

function add() {
    return result = parseFloat((firstNumber + secondNumber).toFixed(10)), textDisplayBottom.textContent = `${result}`;
}

function subtract() {
    return result = parseFloat((firstNumber - secondNumber).toFixed(10)), textDisplayBottom.textContent = `${result}`;
}

function multiply() {
    return result = parseFloat((firstNumber * secondNumber).toFixed(10)), textDisplayBottom.textContent = `${result}`;
}

function divide() {
        return result = parseFloat((firstNumber / secondNumber).toFixed(10)), textDisplayBottom.textContent = `${result}`;
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
        if (operator == "/" && secondNumber == "0") {
            return alert("Stop that. You'll break it."), resetCalc();
        } else {
            displayValue += `${secondNumber}` + " =";;
            textDisplayTop.textContent = `${displayValue}`
            return lastStoredResult = result;
        }
    }}

    function operateMultiple() {
        if (operator === "+") {
            add();
            displayValue += `${secondNumber}`;
            textDisplayTop.textContent = `${displayValue}`
            return lastStoredResult = result;
        } else if (operator === "*") {
            multiply();
            displayValue += `${secondNumber}`;
            textDisplayTop.textContent = `${displayValue}`
            return lastStoredResult = result;
        }
        else if (operator === "-") {
            subtract();
            displayValue += `${secondNumber}`;
            textDisplayTop.textContent = `${displayValue}`
            return lastStoredResult = result;
        }
        else if (operator === "/") {
            divide();
            displayValue += `${secondNumber}`;
            textDisplayTop.textContent = `${displayValue}`
            return lastStoredResult = result;
        }
        return
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

    function toggleSecondNumber() {
        if (secondNumberToggle === true) {
            return secondNumberToggle = false;
        } else {
            return secondNumberToggle = true;
        }
    }

///////////////////////////////////////////////// IMPROVEMENTS /////////////////////////////////////////////////

/* 
01. Simplify operator button events - could possibly be done using objects
    ie. Operator object
    01. Key = Add, Value = "+"
    02. Key = Multiply, Value = "*"

02. Add a “backspace” button, so the user can undo if they click the wrong number. Undo 
    *need to research how to do this. Save state at each step for undo function?? Press undo - revert to last state???

03. Add keyboard support!
*/