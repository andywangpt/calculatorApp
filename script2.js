let firstNumber = ''
let operator = ''
let secondNumber = ''
let storedOperator = ''

const numberButtons = document.getElementsByClassName('number-button')
for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        let number = e.target.value
        displayUserInput(number)
    })
}

const operatorButtons = document.getElementsByClassName('calculatorOperators')
for(j=0; j < operatorButtons.length; j++) {
    operatorButtons[j].addEventListener('click', (e) => {
            operator = e.target.value
            if(operator == 'C'){
                secondNumber = ''
                firstNumber = ''
                operator = ''
                display.textContent = '0'
                return
            }
            if(firstNumber && operator != '' && secondNumber) {
                calculate()
                storedOperator = operator
                return
            }
    })
}

function displayUserInput(number) {
    if(storedOperator != '=' && operator !='AC'){
        storedOperator = operator
    }
    if(!operator) {
        firstNumber = firstNumber.concat(number)   
        display.innerText = firstNumber
        return
    }
    if(operator || secondNumber) {
        if(!secondNumber){
            secondNumber = firstNumber
            firstNumber =''
        }
        firstNumber = firstNumber.concat(number)
        display.innerText = firstNumber
        return
    }
} 

function calculate(){
    let numOne = parseFloat(firstNumber)
    let numTwo = parseFloat(secondNumber)

    if(operator == '=') {
        operator = storedOperator
    }
    switch(storedOperator) {
        case '+':
            secondNumber = numOne + numTwo
            displayCalculation()
            break
        case 'x':
            secondNumber = numOne * numTwo
            displayCalculation()
            break
        case '-':
            secondNumber = numTwo - numOne
            displayCalculation()
            break
        case '/':
            secondNumber = numTwo / numOne
            displayCalculation()
            break
    }
}

function displayCalculation(){
    display.textContent = secondNumber
    firstNumber = ''
}