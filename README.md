# Calculator
Calculator assignment for 'The Odin Project' course.

FUNCTIONS
add = x + y
subtract = x - y
multiply = x * y
divide = x / y
operatorSelect = check if result already has a value, if true, runs the 'equals' function (converts strings to number) and updates 'firstNumber' with result.
resultCalculate = Takes the chosen operator and 2 numbers and then calls one of the above functions on the numbers.
undoStep = *need to research how to do this*
clearCalc = clears all variables


VARIABLES
firstNumber
operator
secondNumber
displayValue
result

UI
10 numbers
4 operators (above FUNCTIONS)
1 display screen (displayValue VARIABLE)
1 clear button (clearCalc FUNCTION)
1 backspace button (undoStep FUNCTION)
1 equals button (resultCalculate FUNCTION)
. button (Demical place - adds '.' string to active number)


PSEUDOCODE

--Save state at each step for undo function??

--Assign true/false flag to firstNumber to indicate active??

Press button 1 - stores in firstNumber and displayValue as string
Press button 2,3,4,5,DECIMALPLACE,etc - adds to above values as string
Press operator - Updates operator value and runs operatorSelect function.

--Assign true/false flag to second Number to indicate active??

Press button 1 - stores in secondNumber and replaces displayValue as string
Press button 2,3,4,5,etc - adds to above values as string
Press equals - Runs equals function
Press undo - revert to last state???