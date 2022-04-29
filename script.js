
const display = document.getElementById('display')

//variables
let userInputStr = ''
let userInputNum = 0
let midOperation = false
let operator = ''
let calculatorStore = ''
let calculatorStore2 = 0

let multiply = false
//operatorButtons
const clearScreenButton = document.getElementById('AC').addEventListener('click', (e) => {
    e.preventDefault()
    clearScreen()
    //calculatorStore = ''
 })
const multiplyButton = document.getElementById('x').addEventListener('click', (e) => {
    e.preventDefault()
    multiplyFunction(userInputStr) 
})
const addButton = document.getElementById('+').addEventListener('click', (e) => {
    e.preventDefault()
    addFunction(userInputStr)})
const minusButton = document.getElementById('-').addEventListener('click', (e) => {
    e.preventDefault()
    subtractFunction(userInputStr)})

//numbers
const numberButtons = document.getElementsByClassName('number-button')
for(i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        let number = e.target.value
        displayNumber(number)
        midOperation = false
        console.log('calcStore', calculatorStore)
    })
}




function multiplyFunction(userInputStr){
    if(midOperation == false && operator == ''){
        calculatorStore = userInputStr
        console.log('calculatorStore ', calculatorStore, 'userinputstr', userInputStr)
        midOperation = true
        operator = 'multiply'
        return
    }

    if(operator == 'multiply') {
        userInputNum = Math.floor(userInputStr)
        clearScreen()
        console.log(calculatorStore)
        calculatorStore = (userInputNum * calculatorStore)
        display.innerText = calculatorStore 
        return
    }
    /*
    if(operator !='multiply'){
        completeOperation(calculatorStore, userInputStr)
    }
    */
}


function addFunction(userInputStr) {
    if(midOperation == false && operator ==''){
        calculatorStore = Math.floor(userInputStr)
        midOperation = true
        operator = 'add'
        console.log('74 added, calculatorstore', calculatorStore)
        return
    }
    if(operator == 'add'){
        console.log('78')
        completeOperation()
       
    }
    

    if(operator == 'add' && calculatorStore !='') {
        clearScreen()
        completeOperation()
        console.log('add')
    }
}

function subtractFunction(userInputStr) {
    if(midOperation == false && operator ==''){
        calculatorStore = userInputStr
        midOperation = true
        operator = 'subtract'
        console.log('79') //
        return
    }
    completeOperation()
    if(operator == 'subtract' && calculatorStore !='') {
        clearScreen()
        calculatorStore = parseInt(calculatorStore) - parseInt(userInputStr) 
        display.innerText = calculatorStore 
}}

//function equalFunction() {}
//const equalButton = document.getElementById('=').addEventListener('click', (e) => {e.preventDefault(); equalFunction(userInputStr);}

function completeOperation(calculatorStore, userInputStr) {
    //midOperation = true
    //clearScreen()
    console.log('completeOp')

    
    if(operator == 'multiply') {
        calculatorStore = userInputNum * calculatorStore
        display.innerText = calculatorStore 
        console.log('userinput', userInputNum, 'calcstore', calculatorStore)
        return
    }
    if(operator == 'multiply' && calculatorStore !='') {
        clearScreen()
        calculatorStore = parseInt(userInputStr*calculatorStore)
        display.innerText = calculatorStore 
        console.log('68', calculatorStore)
    }
    if(operator == 'add'){ 
        calculatorStore = userInputStr + calculatorStore
        display.innerText = calculatorStore 
        console.log('117', calculatorStore, userInputStr)
        return
    }
    if(operator == 'subtract') {
        calculatorStore = parseInt(calculatorStore) - parseInt(userInputStr)
        console.log(userInputStr)
        return
    }
}
