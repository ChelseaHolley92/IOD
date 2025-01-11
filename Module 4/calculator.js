let firstNumber;
let secondNumber;
let operation;

let resultElm = document.getElementById('result')

function clickNumber (num) {
    let StringNum = new string (num)

    if (!firstNumber) {
        firstNumber = StringNum
        resultElm.innerText = firstNumber
    }

    else if (!operation) {
        firstNumber += StringNum
        resultElm.innerText =firstNumber
    }

    else if (!secondNumber) {
        secondNumber = StringNum
        resultElm.innerText = secondNumber
    }

    else {
        secondNumber += StringNum
        resultElm.innerText = secondNumber
    }

}

function clickOperator(op) {
    operation =op
}

function showResult() {
    let first = parseInt (firstNumber)
    let second = parseInt (secondNumber)
    let calculation = 0

    switch (operation) {
        case '+':calculation = first + second; break;
        case '+':calculation = first - second; break;
        case '+':calculation = first / second; break;
        case '+':calculation = first * second; break;
    
        clearResult()
            firstNumber =new String(calculation)
            resultElm.innertext =calculation


    }

    function clearResult() {
        firstNumber = undefined
        secondNumber =undefined
        operation =undefined
        