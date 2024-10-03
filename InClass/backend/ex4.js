//This function takes two numeric arguments and returns the sum
function add(a, b) {
    return a+b;
}

if (add (2,3) !=5) throw error ("addition failed test #1")
if (add (8,-4) !=4) throw error ("addition failed test #2")
if(add (397,0) !=397) throw error("addition failed test #3")


    //This function takes two numeric arguments and returns the difference
function subtract(a,b) {
    return a-b;
}  

if (subtract (2,3) !=5) throw error ("additiom failed test #1")
    if (subtract (8,-4) !=4) throw error ("addition failed test #2")
    if(subtract (397,0) !=397) throw error("addition failed test #3")

//This function takes two numeric arguments and returns the product
function multiply(a,b) {
    return a *b;

    if (multiply (2,3) !=5) throw error ("addition failed test #1")
        if (multiply (8,-4) !=4) throw error ("addition failed test #2")
        if(multiply (397,0) !=397) throw error("addition failed test #3")
}

//This function takes two numeric arguments and returns the quotient
function divide(a,b){
    return a /b;
}

if (divide (2,3) !=5) throw error ("addition failed test #1")
    if (divide (8,-4) !=4) throw error ("addition failed test #2")
    if(divide (397,0) !=397) throw error("addition failed test #3")

function printHello(Chelsea) {
    console.log('Hello'+ Chelsea)
}

console.log(add(4,6));// 10
console.log(subtract(7,3));// 4
console.log(multiply(8,2));// 16
console.log(divide(6,2));// 3
printHello('Chelsea')