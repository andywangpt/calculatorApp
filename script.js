
const display = document.getElementById('display')

//variables
let userInput = ''
let midOperation = false
let multiply = false
let add = false
let subtract = false
let divide = false
let calculatorStore = ''

//operatorButtons
const clearScreenButton = document.getElementById('AC').addEventListener('click', (e) => {
    e.preventDefault()
    clearScreen()
    calculatorStore = ''
    midOperation, multiply, add, subtract, divide = false
})
const multiplyButton = document.getElementById('x').addEventListener('click', (e) => {
    e.preventDefault()
    multiplyFunction(userInput)
})
const addButton = document.getElementById('+').addEventListener('click', (e) => {
    e.preventDefault()
    addFunction(userInput)
})

//numbers
const numberButtons = document.getElementsByClassName('number-button')
for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        let number = e.target.value
        displayNumber(number)
        midOperation = false
    })
}

//functions
function displayNumber(number){
    if(midOperation == false){
        userInput = userInput.concat(number)   
        display.innerText = userInput  
    }
    if(midOperation == true) {
        clearScreen()
        userInput = userInput.concat(number)
        display.innerText = userInput
    }
}    
function multiplyFunction(userInput){
    add, subtract, divide = false

    if(midOperation == false && multiply == false){
        calculatorStore = userInput
        midOperation = true
        multiply = true
        return
    }
    if(multiply == true && calculatorStore !='') {
        clearScreen()
        calculatorStore = userInput*calculatorStore
        display.innerText = calculatorStore 
    }
}
function clearScreen(){
    userInput = ''
    display.innerText = userInput
    console.log('clearscreen')
}

function addFunction(userInput) {
    multiply, subtract, divide = false

    if(midOperation == false && add == false && userInput!=''){
        calculatorStore = userInput
        midOperation = true
        add = true
        console.log('79')
        return
    }
    if(add == true && calculatorStore !='') {
        clearScreen()
        calculatorStore = parseInt(userInput) + parseInt(calculatorStore)
        console.log('88', userInput, calculatorStore)
        display.innerText = calculatorStore 
    }
}


/*
function minusFunction(userInput) {

}

function equalFunction() {

}
*/
/*
const minusButton = document.getElementById('-').addEventListener('click', (e) => {
    e.preventDefault()
    minusFunction(userInput)
})
const equalButton = document.getElementById('=').addEventListener('click', (e) => {
    e.preventDefault()
    equalFunction(userInput)
})
*/