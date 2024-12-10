// console.log ('hello'); console.log('world')

// console.log('hello');
// console.log('hello');

/* line of code
    also line of code
    another line of code console. log('i am commented out')
    */
  
   //conts integer=123-integer-whole number
   //conts float=12.345-floating point decimal number

//console.log(1/0) infinity-division by zero
// console.log(1/0) negative division by zero-infinity
//console.log("not a number"/ 1)// invalid mathematical operation=NaN
//PEMDAS=Please excuse my dear aunt sally (parentheses, exponents, multiplication)

//let one=1
//let two=2
//let three=3

//console.log(one + two-three +two/one);

//const bignit_valid=123456789012345n;
//const bignit_invalid=123456789012345; // too large for standard integers

// console.log(bignit_valid==bigint_invalid)

//-strings
//const doubleQuotes="string that can include 'single quotes"
//const singleQuotes= 'string can include double quotes'
//const backflicks-string that can be inclide variables-$(singleQuotes)'

//-Booleans
// let isChecked=false
//let isToggleOn=true
//isChecked=isChecked
//console.log(isChecked)

//-Null
// let age=null
// console.log(age)

//-undefined
//let location
//let age=null
//console.log|${location}==$(age)?$(location==age}')
//console.log|'${location}==$(age)? $(location==age})

//-Object
//const tv={// object start here
//  brand: "Sony Bravia", // key-valu pair, brand is the key, "Sony Bravia" is
//  size:"55-inch",// values can be any data type
//  model:2023, // multiple key-value pairs are seperated by comas
//resolution: "4k"// the coma on the last key-value pair can be omitted
//}

//-data types
//console.log(typeof undefined)
//console.log(typeof 0)
//console.log(type of 10n)
//console.log(typeof true)
//console.log(typeof 'text')
//console.log(typeof Symbol('id'))
//console.log(typeof Math)
//console.log(type of null)
// console.log(typeof console.log)


//String Conversion
//console.log|(String (false) | // false-string form of boolean
//console.log( "1"+ 2 + 3 ) // 123-string '1' is concatenated with number 2 then number 3
// console.log|1+2 + "3") // 33-number 1 is added to number 2 then concatenated with string '3'

//-Numeric Conversion
// console.log(Number("     4     ") ) // 4-trims spaces
//console.log(Number(null)) // 0-intentionally empty value converrts to 0
//console.log(Number(underfined)) //NaN -nonexistent value is unknown
//console.log(Number(false)) // 0-false converts to 0
//console.log(Number(true)) // 1-true converts to 1
//console.log(Number("")) // 0-empty string converts to 0
//console.log(Number("not a number"))// NaN-non-empty strings beginning with chars cannot convert
//console.log("6/2")//  3
//console.log("6* 2") // 12
//console.log("6-2") //  4
//console.log(+"6") // 6

//-Boolean Conversion
//console.log( Boolean("") ) // false - empty string
//console.log( Boolean(0) ) // false - zero value
//console.log( Boolean(null) ) // false - no value
//console.log( Boolean(undefined) ) // false - unknown value
//console.log( Boolean(NaN) ) // false - not a number
//console.log( Boolean("false") ) // true - non-empty string
//console.log( Boolean(-1) ) // true - non-zero number
//if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
//if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg
//console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
//console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
//console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true
//console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
//console.log( !!"" ) // false - convert value to boolean then negate/toggle twice

// 'function' keyword followed by the custom function name, then ()

//function helloWorld()
//{
//    console.log('hello world');
//}


//-Functions-Declaration
//helloWorld()

// function checkAge returns a value when called

//function checkAge(age) {
 //   if (age >= 18) {
  //      return 'adult'; // if the condition is true, return this string and exit
 //   }
 //   return 'non-adult'

//}
//console.log checkAge(21))
//console.log( checkAge(21) ) // adult

//-Function-Expression

//const sayHi = function() {
//    console.log('Hi')
// }
//sayHi()

//sayHiExpression();-won't work before initialization

//sayHiDeclaration();-will work before initialization

//const sayHiExpression = function() {
 //   console.log('hi');
//}

//function sayHiDeclaration() {
 //   console.log('hi');
//}

//-Function-Arrow
//const sayHi= () => console.log('Hi')

//sayHi()

//-Objects

//-object contructor-not used much
//const user=new Object()

//-Object Litertal-More Common
//const user-{}
// const ball={}
//const car={}

//-Object with properties

const user = { 
    name: 'joe',
    age: 20,
    'has a dog': true
}
//-Object with operation


//console.log(user.name)
//let dogOwner = user['has a dog']

//user.age = 21
//console.log(user.age)

//user.location='NSW'
//console.log(user)

// delete user.location
// conts object- {

//-Property name limitation
// const object={
//2: 'value of numeric property',
//2': 'value of string property'
// }

// console.log(object)

//-Property existance test
// const phone={
//      model: 'iPhone 11',
//      color: 'black
// }
//if (phone.color) console.log(`My ${phone.model} is ${phone.color}`)

//- Iteration
//let goal= 5
//for (let i = 0; i < goal; i++) {
 //   console.log(`Iteration ${i} of ${goal}`)
//}

//Object Iteration
 const phone = {
    model: 'iPhone 15 Pro Max',
    color: 'black',
    storage: 512
 }

 for (let key in phone) {
    console.log('key: ' + key);
    console.log('value: ' + phone[key]);
 }

 //-Object reference
 //let person1={name:'Anna'}
 //let person2=person1
 //person1.name='Brian'
 //console.log(person2.name)
 //letperson3='carty'
 //letperson4=person3
 //person3='david'
 //console.log(person4)
 
 //-Object shallow copy
 const user={name: Elliot, age: 27}

 //const userClone={}

 //for (let key in user) { // iterate over user properties
 //   userClone[key] = user[key];
 // }

 //console.log(userClone)

 //-Shallow Copy wth Object Spread
 // const userClone = {...user};
 //console.log(userClone)

 //const userClone = {...user, age: 28, location: 'New Zealand'};
 //console.log(userClone);

 //const vehicle = { make: 'Toyota', model: 'Camry'};
//const mergedUser = {...user, ...vehicle};
//console.log(mergedUser);

//-Object Deep Clone

//const box1 = {
 //   weight: '20kg',
 //   dimensions: { // nested object property
 //   width: '30cm',
 //   height: '10cm'
    // }
    // }

//  const box2 = {...box1}; // shallow clone
//box1.dimensions.height = '12cm'; // change box1 nested object property
//console.log(box2);

//-Object Method
const user-{
 //   name: 'Bilbo Baggins',
//sing: function() { // method of user object
//console.log('Roads go ever ever on');
//},
//sing2() { // shorthand method syntax, does same as above
    console.log('Over rock and under tree');
//}
//}
//user.sing()
//super.sing2()

//Object methods with context
//const user={
    //name: 'Bilbo Baggins'
    //age:24
    //printGreeting() {
     //   console.log('Hello, I'm $(this.name))
   // }
// }
//user.printGreeting()

//-Object Constructor Function
function User(first, last) {
    this.First=first;
    this.last=last;
    this.hasShortName=() => this. first. length <=3;
}

let user1=next user('Tim', 'Smith' ); 
console.log(user1);//User {first: 'Tim', last: 'Smith'}
console.log(user1.hasShortName)()); //true

//-Object Generations with new
function User(first, last) { // constructor function
    //this = {}; // implicitly
    this.first = first;
    this.last = last;
    this.hasShortName = () => this.first.length <= 3;
    //return this; // implicitly
    }

    //-Object generation ES6
    class User {
        constructor(first, last) {
        this.first = first;
        this.last = last;
        }
        hasShortName() {
        return this.first.length >= 3
        }
        }
        let user2 = new User('Tina', 'Smith') // need to use 'new'
        console.log(user2) // User { first: 'Tina', last: 'Smith' }
        console.log(user2.hasShortName()) // false