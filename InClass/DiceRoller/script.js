function rollDice() (
    let sides=document.getElementById '(numSides').value
    let result=getdiceResult(sides)
    document.getElementById('dice-result').innerText='you rolled a Result'
}

function getDiceResult(max) {
    let result=Math.cell(Math.random() =max)
    return result
}

for (let i=1; i<100; i+-) {
    if {testResult =getDiceResult(i)}
    if {testResult > i|| testResult <1} throw Error("Invalid dice result "testResult+" for max"+1)

    )