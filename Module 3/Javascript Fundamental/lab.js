//PEMDAS-PLEASE EXCUSE MY DEAR AUNT SALLY
//1.

//console.log(""+1+0)
//console.log("" -1+0)
//console.log(true +false)
//console.log(!true)
//console.log(6/"3")
//console.log("2"*"3")
//console.log(4 + 5 + "px")
//console.log("$" + 4 + 5)
//console.log("4"- 2)
//console.log("4px" -2)
//console.log("  -9  " + 5)
//console.log("   -9  "- 5)
//console.log(null + 1)
//console.log(undefined + 1 )
//console.log(undefined== null)
//console.log(undefined === null)
//console.log("\t \n" - 2)

// 2.
let three="3"
let four="4"
let thirty="30"

//let addition= three + four
//console.log (addition)
//false

//let multiplication= three * four
//console.log(multiplication)
//true

//let division= three / four
//console.log(division)
//true

//let subtraction= three - four
//console.log(subtraction)
//true

//let lessThan1= three < four
//console.log(lessThan1)
//tue

//let lessThan2= thirty < four
//console.log(lessThan2)
//wrong

//3.
//if(0) console.log('#1 zero is true') 
//if ("0") console.log(#2 zero is true')
//if (null) console.log('null is true')
// if (-1) console.log('negative is true')
 //  if (1) console.log('positive is true')

//4.
//let a = 7, b = 18;
//let result = `${a} + ${b} is `;

//if (a + b < 10) {
//result += 'less than 10' : 'greater than 10
//console.log(result)

//5.
function getGreeting(name) {
    return 'Hello' + name +'!'
}


//A
const getGreetingA= function(name) {
    return 'Hello ' +name + '!'
}

//B-Arrow Function
const getGreetingB =(name) => 'Hello' + name '!'


//console.log(getGreeting('BOB')) 
//console.log(getGreetingA('BOB'))
//console.log(getGreetingB('BOB')) 

//const westley = {
//    name: 'Westley',
//    numFingers: 5
//    }
    
//    const rugen = {
//    name: 'Count Rugen',
 //   numFingers: 6
 //   }

 //   const inigo = {
 //   firstName: 'Inigo',
 //   lastname: 'Montoya'
 //   greeting(person) {
 //   let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
 //   console.log(greeting + this.getCatchPhrase(person));

//    },
//        getCatchPhrase(person) {
 //   return 'Nice to meet you.';
 //   },
 //   getCatchPhrase (person) => person.numFingers == 6 ?
 //   'Not Nice to meet you':'Nice to meet you'
//}


//inigo.greeting(westley)
//inigo.greeting(rugen)

//const basketballGame = {
 //   score: 0,
 //   foul: 0,
 //   freeThrow() {
 //   this.score++;
 //   return this
 //   },
 //   basket() {
 //       this.score += 2;
 //       return this
//    },
//    threePointer() {
//        this.score += 3;
 //       return this
//    },
//    foul() {
//        this.fouls ++
//        return this
 //   },
 //   halfTime() {
 //       console.log('Halftime score is '+this.score+'(+'this.fouls+' foul(s).')
 //       return this
 //   },
 //   fullTime() {
//        console.log('Final score is'  +this.score+'('this.fouls+'fouls)'
            return this

//    }
//}

//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();
//.threePointer().halfTime().fullTime()


//8.

//const sydney = {
 //   name: 'Sydney',
 //   population: 5_121_000,
 //   state: 'NSW',
 //   founded: '26 January 1788',
 //   timezone: 'Australia/Sydney'
//}

//const nelboure= {
 //   name: 'Melbourne'
 //   population: 86_441
 //   state: 'Vic'
 //   Age: 135
//}
//function printCityProps(cityobj) {
 //   for (cityProp in cityobj) {
 //       console.log(cityProp + '=' + cityobj[cityProp])
//    }
//}
//}

//printCityProps(syndey)
//printCityProps(nelbourne)

// 9.

//let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
//let moreSports= teamsports
//moreSports.push('Basketball')
//moreSports.unshift('football')

//let dog1='Bingo'
//let dog2=dog1
 //dog2='Lucky'

//let cat1 = { name: 'Fluffy', breed: 'Siberian' };
//let cat2=cat1
//cat2.name='Snuggles'

// console.log(teamsports)
// console. log(dog1)
//console.log(cat1)

//let moreSports2=(...teamSports)
//moreSports2.push('pingpong')
//console.log(teamSports)

//let cat3={...cat1}
//cat3.name='baldy'
//console.log(cat1)

function Person(name, age) {
    this.name= name;
    this.age= age;
    this.human= true;
}

let person1=new Person('Jon', 30)
let person2=new Person('Jane', 25)

Class PersonClass {
    constructor(name, age) {
        this.name= name;
        this.age= age;
        this.human= human
    }
   

    carDrive() {
        return this.age >=16
    }

}

let person3= new Person('Jos',15)


console.log(person1)
console.log(person2)
console.log(person3)

if (person1.canDrive()) console.log(person1.name +'is 'person1.age+'and can drive')  
if (person2.canDrive()) console.log(person1.name +'is 'person2.age+'and can drive')
if (person3.canDrive()) console.log(person3.name +'is 'person3.age+'and can drive')

