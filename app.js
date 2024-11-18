/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let inputNumber1 = ""; 
let inputOperator = ""; 
let displayValue = "";

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.button.operator');
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', handleClick); //call handleClick on button

    }
    )
clearButton.addEventListener('click', clearCalculator);
/*-------------------------------- Functions --------------------------------*/
function handleClick(event) {
    const clickedButtonvalue = event.target.innerText
    if (!isNaN(clickedButtonvalue)) {
        // if clicked the button it should worked
       displayValue += clickedButtonvalue;
      display.innerText = displayValue;
    } else if (["/","*","-","+"].includes(clickedButtonvalue)) {
        inputNumber1 = displayValue;
        inputOperator = clickedButtonvalue;
        displayValue = "";
        // clear display value for the next input

    } else if (clickedButtonvalue === "=") {
        // when '=' is clicked, perform the calculation 
        const inputNum2 = displayValue;
        const num1 = parseFloat(inputNumber1);
        const num2 = parseFloat(inputNum2);
        let result; 

        switch(inputOperator){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2; 
                } else {
                    result = "Error";
                }
               // Handle division by zero 
               break;
            default:
                result = "error"; // case if operator is invalid
        }
        // 
        display.innerText = result;

        //  reset all variables for the next calculation
        displayValue = "";
        inputNumber1 = "";
        inputOperator = "";

    
    
    }
}
function clearCalculator(C) {
    displayValue = "";
    inputNumber1 = "";
    inputOperator = "";
    display.innerText = "0"; // Reset the display to "0"
}
        

            
           
            
    



 
        



