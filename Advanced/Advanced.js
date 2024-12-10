
//-Variable Scope

let globalVariableCat = 'cat';
function myFunction() {
let localVariableDog = 'dog'
return 'global function with local scope variable '+localVariableDog;
}
console.log(localVariableDog) // ReferenceError: localVariableDog is not defined
// globalEnvironment = {
// //
// //
// //
// // }
//outer null// there is no parent environment here
// // }
// environmentRecord: {
// globalVariableCat: 'cat', // has no access to localVariableDog
// myFunction: <reference to function object>,
// }
// environmentRecord: {

// },
// outer: globalEnvironment // can still access everything in global
// localVariableDog: 'dog'
// 5
// //
// //

//-variable scope-closures

//function makeAdder(x) { // function factory: bundles value of x into the scope of adder
 //   return function adder(y) { // closure function 'adder' now has access to both x and y when created
 //   return x + y;
 //   };
 //   }

 //   const add5 = makeAdder(5); 

 //   console.log( add5(10) ) 

 //function makeHeading(hTag) { 
 //   return function(title) { 
 //   return `<${hTag}>${title}</${hTag}>`
 //   }
 //   }

//const getH1 = makeHeading('h1') 
//const getH2 = makeHeading('h2') 

//console.log( getH1('Heading 1') ) 
//console.log( getH2('Heading 2') ) 

//-function Object

//function sayHiDefn() { console.log('Hi (function definition)'); } // named function
//const sayHiExpn = function() { console.log('Hi (function expression)'); } // named variable
//const sayHiArrow = () => console.log('Hi (arrow function)'); 

//console.log(sayHiDefn.name) 
//console.log(sayHiExpn.name) 
//console.log(sayHiArrow.name) 

//function oneParam(a) {
 //   console.log('This function has a single parameter: ' + a)
 //   }

 //   function twoParams(a, b) {
 //   console.log(`This function has two parameters: ${a} and ${b}`)
 //   }

 //   function manyParams(a, b, ...extras) {
 //   console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)
 //   }

 //   console.log(oneParam.length) 
 //   console.log(twoParams.length)
 //   console.log(manyParams.length)

    //-custom properties

 //   function sayHi() {
 //       console.log('Hi');
 //       sayHi.counter++; 
 //       }

 //       sayHi.counter = 0 /

//        sayHi() 
 //       sayHi() 
 //       console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times

        // Scheduling setTimeout

       // function printMessage(msg) {
          //  console.log(`Message: ${msg}`)
        
       // }     
            
       // let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec

       // let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
       // clearTimeout(cancelledTimerId); 

       // setTimeout( () => console.log("log statement inside arrow function"), 500 )

       // setTimeout( () => console.log("first message"), 5000 ); 
//setTimeout( () => console.log("second message"), 3000 ); 
//setTimeout( () => console.log("third message"), 1000 );
//setTimeout( () => console.log("fourth message"), 0 ); 
//console.log("fifth message");

//let tickId = setInterval( () => console.log('tick'), 2000 ) // 'tick' every 2s
//setTimeout( () => clearInterval(tickId), 10*1000 )



//function repeatInterval(delay, limit)
// {
//let counter = 1;

//let intervalTimer = setInterval(function repeatThis() {
  // console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
     // if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
     //   counter++;
      //}, delay);
    // }

     //repeatInterval(2000, 10);

   //Scheduling-setTimeout

//   function repeatTimeout(delay, limit)
{
//let counter = 1;
//setTimeout(function repeatThis(current) {
//   console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
//if (current < limit) setTimeout(repeatThis, delay, current+1) // repeat if limit not reached
//}, delay, counter);
//}

//repeatTimeout(2000, 10);

//- Decorators and forwarding-Adding logging/timing information

//function printGreeting(name) { // simple undecorated function
   //console.log('Hello, ' + name);
  // }
   //printGreeting('Undecorated');

   //function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
   //return function (name) { // and returns that function with extra bits - timing/logging
   //console.time('Function timer'); // start a timer
   //console.log(`\nExecuting function ...`) // log a message
   //const result = originalFunction(name); // execute the original function and store result
   //console.timeEnd('Function timer'); // stop the timer
  // return result; // return the result of running the original function
//   }
 //  }

//const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
//decoratedPrintGreeting('Decorated')

//function slow(x) {
 //    let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
 //  console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
//   for (let i = 0; i < goal; i++) random++;
 //  return random; // return large number after counting to it
//}

//function cachingDecorator(origFunction)
//const cache = new Map();

//return function(x) { // decorator returns same function with extra bits - caching
   //if (cache.has(x)) { // if the key exists in the cache,
 //  console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
//   }
 //  let result = origFunction(x) // otherwise, call the original function and store the result
//   cache.set(x, result); // then cache (remember) the result for next time
//   return result;
//   };
//}



//const fast = cachingDecorator(slow)
//const fastTimed = loggingTimingDecorator(fast) 
//fastTimed(8) 
//fastTimed(8


//function loggingTimingDecorator(originalFunction) { 
   //return function () { 
   //console.time('Function timer');
   //console.log(`\nExecuting function ...`)
     // const result = originalFunction.apply(this, arguments) // and so does this - try out both
   //console.log(arguments); 
   //console.timeEnd('Function timer'); 
   //return result; 
  // }
//}


//let worker = {
//   getMultiplier() {
 //  return Math.floor(Math.random() * 1_000_000); // large random number
 //  },

 //  slow(x) {
 //  let random = 0, goal = x * this.getMultiplier(); 
 //  for (let i = 0; i < goal; i++) random++;
 //  console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
 //  return random; 
 //  };
//}
   
 //  worker.slow(5) 
//   worker.fast = cachingDecorator(worker.slow) 
 //  worker.fast(3)- Does not work-On purpose

 //function isOdd(number) { return number % 2;

   //function getOddNumbers() {
           //return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
     // }

      //let results = getOddNumbers(10, 1, 3, 4, 8, 9);
     // console.log(results); 

      //function Product(name, price) {
       //  this.name = name;
      //   this.price = price;
      //   this.salePrice = price * .9; // 10% off
       //  }

      //   function Food(name, price) {
       //  Product.call(this, name, price); // inherits from Product with custom context
       //  this.category = 'food';
       //  }

       //  const cheese = new Food('cheese', 5);
       //  console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);

       //  const user = {
          //  name: 'John',
          //  sayHi() {
          //  console.log(`Hi, ${this.name}`)
          //  }

          //  }
          //  user.sayHi() // called directly, works! Hi, John
         //   setTimeout(user.sayHi, 1000)

         //   const user = {
          //  name: 'John',
         //   sayHi() {
          //  console.log(`Hi, ${this.name}`)
            }
          //  }
         //}
         //setTimeout( function() { user.sayHi(); }, 1000 ) // works! Hi, John
         //setTimeout( () => user.sayHi(), 1000 ) //
          
         //const user = {
         //   name: 'John',
         //   sayHi() {
         //   console.log(`Hi, ${this.name}`)
          //  }
          //  }
                                 
          // const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
         //   setTimeout( boundSayHi, 1000 )

          //  ●let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
         //   let animalPrototype = Object.getPrototypeOf(animal); 

         //   console.log(animalPrototype); 

          //  console.log(Object.getOwnPropertyNames(animalPrototype)); 

          //let rabbit1 = { jumps: true };
         // Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
         // let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
         // jumps: { // name of custom 'own' property for rabbit object
         // value: true, // property descriptor to set the property value
         // enumerable: true // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
        //  }
          //});

          
          //console.log(rabbit1, rabbit2); 
          //console.log(rabbit1.legs, rabbit2.legs); /

          //for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
          //for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) 

            //function Rabbit(name) { // constructor function, first letter capitalized by convention
              // this.jumps = true;
              // this.name = name;
               //}

               //Rabbit.prototype = animal; 

                 //let whiteRabbit = new Rabbit('White Rabbit');
               //console.log(whiteRabbit); 
              // for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); 

               //const obj = {} // simple empty object
              // console.log( Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype
              // console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj))

               //const obj = {} // simple empty object
              // console.log( Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype
              // console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj))

              // String.prototype.show = function() { // creates new 'show' function on built-in String prototype
                  console.log(this);
                  };
                  "BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype
                  // polyfilling for String.prototype
                  if (!String.prototype.repeat) { // if there's no such function in the prototype already
                  String.prototype.repeat = function(n) { // define a repeat function to repeat the string n times
                  return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
                  };
                  }
                  console.log( "La".repeat(3) );

                  const obj = {
                     0: "Hello",
                     1: "world",
                     length: 2, // needed for join to work
                     };
                     obj.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
                     Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
                     console.log(obj.join(','));

                     class ExampleClass {
                        // each instance of the class will have any properties
                        prop1 = 'value1';
                        prop2 = 'value2';
                        constructor() {
                        // constructor function creates a new instance of this class
                        }
                        method1() {
                        // methods are functions of the class
                        }
                        }

                        class Animal {
                           constructor(name) {
                           this.speed = 0; this.name = name;
                           }
                           run(speed) {
                           this.speed = speed;
                           console.log(`${this.name} runs with speed ${this.speed} kph.`);
                           }
                           stop() {
                           this.speed = 0;
                           console.log(`${this.name} stands still.`);
                           }
                           }
                           class Rabbit extends Animal {
                           hide() { // custom function, also inherits from Animal
                           console.log(`${this.name} hides!`);
                           }
                           }
                           let bunny = new Rabbit('bunny'); 
                           bunny.run(9); 
                           bunny.hide(); 

                           class Rabbit extends Animal {
                              stop() { // overrides stop method in parent class
                              super.stop(); // call parent stop
                              this.hide(); // and then hide
                              }
                              hide() { // custom function, also inherits this.name from Animal
                              console.log(`${this.name} hides!`);
                              }
                              }

                              let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
                              bunny.run(9); // bunny runs with speed 9 kph.
                              bunny.stop();

                              class Rabbit extends Animal {
                                 constructor(name, earLength)
                                 {
                                 super(name); // call the constructor function of the parent, inherited Animal class
                                 this.earLength = earLength; // adds custom properties only for instances of Rabbit
                                 }
                                 stop() { // function overridden from parent class
                                 super.stop(); // call parent stop
                                 this.hide(); // and then hide
                                 }
                                 hide() { 
                                 console.log(`${this.name} hides!`);
                                 }
                                 }

                                 let bunny = new Rabbit('bunny', 8); 
                                 console.log( bunny.earLength )
                                 class Animal {
                                    type = 'animal';
                                    constructor(name) {
                                    this.speed = 0;
                                    this.name = name;
                                    }

                                    describe() {
                                    console.log(`${this.name} is a ${this.type}`)
                                    }

                                    }
                                    class Rabbit extends Animal {
                                    type = 'rabbit';
                                    
                                 }
                                 new Rabbit('bunny').describe() 
                                 new Animal('fuzzy wuzzy').describe() 
                                 class Person {

                                    static latin = 'persona'; // static (class) property, belongs to class not any instance
                                    constructor(name) {
                                    this.name = name; // standard property, is unique to each instance of the class
                                    }

                                    getName() { // standard method, belongs to each instance of the class
                                    return this.name;
                                    }

                                    static createAnonymous() { // static (class) method, belongs to class not any instance
                                    return new Person("Unnamed Person");
                                    }

                                    }
                                    let jonas = new Person('Jonas')
                                    console.log( jonas.getName() ) 
                                    console.log( jonas.latin ) // undefined - latin property doesn't belong to jonas
                                    console.log( Person.latin ) // persona - latin property belongs to Person class

                                      let anon = Person.createAnonymous()
                                                                                                                                                                        
                                        class Laptop {
                                       _hardDiskType = 'HDD'; 
                                       constructor(brand) {
                                       this.brand = brand; 
                                       }

                                       getHDiskType() { return this._hardDiskType; } // public method to access protected property
                                       }
                                       const macbook = new Laptop('Macbook Pro');
                                       console.log(macbook.brand) // public property, accessed externally from any instance
                                       console.log(macbook._hardDiskType) // works, not recommended as it violates encapsulation principles
                                       console.log(macbook.getHDiskType())

                                       class Laptop {
                                          _hardDiskType = 'HDD'; // protected property, SHOULD only be used by inheriting classes
                                          #numCPUFans = 1; // private property, CAN only be used internally by class methods
                                          constructor(brand) { // constructors are always public
                                          this.brand = brand; // public property
                                          }
                                          isGaming() { return false; } // public method
                                          getHDiskType() { return this._hardDiskType; } // public method to access protected property
                                          _increaseCPUFans() { // protected method
                                          if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
                                          }
                                          }
                                          const macbook = new Laptop('Macbook Pro');
                                          consolelog(macbook.#numCPUFans)

                                          class GamingLaptop extends Laptop {
                                             constructor(brand) {
                                             super(brand); 
                                             this._hardDiskType = 'SSD'; 
                                             this.#numCPUFans = 2; 
                                             this._increaseCPUFans();
                                             }
                                             isGaming() { return true; } 
                                             }
                                             const alienware = new GamingLaptop('Alienware');
                                             console.log(alienware._hardDiskType) 
                                             console.log(alienware.getHDiskType()) 


                                             try {
                                                const error = "mismatched quotes'
                                                } catch (error) {
                                                console.log('will not catch above error')
                                                }

                                                try {
                                                   noSuchVariable;
                                                   } catch (error) { 
                                                   }

                                                console.log('caught an error: '+ error.message) // all errors have a message property
                                                   
                                                try {
                                                   setTimeout( () => noSuchVariable, 1000 );
                                                   } catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
                                                   console.log('only synchronous errors! ' + error.message) // all errors have a message property
                                                   }
                                                   console.log('prints synchronous code then throws uncaught asynchronous error after 1 sec');
                                                   function checkJson(json) { // checks json argument for validity and ensures a name property
                                                      try {
                                                      const user = JSON.parse(json); // parse string into object
                                                      if (!user.name) {
                                                      throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
                                                      }
                                                      return true; // returns true (valid json) if no error was thrown above
                                                      } catch (e) {
                                                      if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
                                                      console.log( "JSON Error: " + err.message );
                                                      } else {
                                                      throw e; 
                                                      }
                                                      }
                                                      return false;
                                                   }

                                                  // function checkJson(json) { // checks json argument for validity and ensures a name property
                                                    //  try {
                                                    //  const user = JSON.parse(json); // parse string into object
                                                    //  if (!user.name) {
                                                    //  throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
                                                    //  }
                                                    //  return true; // returns true (valid json) if no error was thrown above
                                                    //  } catch (err) {
                                                    //  if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
                                                    //  console.log( "JSON Error: " + err.message );
                                                    //  } else {
                                                    //  throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
                                                    //  }
                                                     // }
                                                     // return false; // returns false if any error occurred

                                                     // finally {
                                                         console.log('at the end'); 
                                                         }
                                                         
                                                         // }

                                                         // const vaildation={"name:" "bob"}
                                                         //const invalidation='{"age": 31}'

                                                         // console.log(checkJson(validationJson))
                                                          // console.log(checkJson(invalidationJson))

                                                          //promise.then( (result) => console.log(result), // prints if/when promise resolves successfully
                                                        // (error) => console.error(error)


                                                      //promise.then( (result) => console.log(result) ) // prints if/when promise resolves successfully
                                                     // .catch( (error) => console.error(error) ) // prints if/when promises completes with error

                                                      //promise
                                                      //.finally( () => console.log('promise is settled') ) 
                                                      //.then( (result) => console.log(result) ) //
                                                      //.catch(error) => console.error(error)


                                                      //const promise = new Promise((resolve                                                   //   if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) 
                                                       //  else setTimeout( () => reject('Random number too low'), 250 ) 
                                                      //}
                                                     // promise // consume the promise by responding to outcomes when they happen
                                                     // .finally( () => console.log('Wait is over, promise has settled.') ) // always prints
                                                   //   .then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
                                                    //  .catch( (error) => console.log('Error! ' + error ) ) 

                                                   // <html> <!-- very basic fetch example demonstrating real-world promises -->
                                                    //<body>
                                                    //    <h2>Check the Dev Inspector Console</h2>
                                                    //<script>
                                                   // fetch('https://reqres.in/api/users') // request data from this server
                                                    
                                                    // when it completes, access the JSON from the HTTP response sent by resolved promise
                                                    
                                                    //.then(response => response.json()) // .json() also returns a promise
                                                    //.then(json => console.log(json)) // log the returned JSON to the browser console
                                                    //.catch(error => console.error(error)) // if there was an error, log that too
                                                    //</script>
                                                   // </body>                                           
                                                     //  let start = 10;
                                                    //  new Promise( resolve => setTimeout(() => resolve(start), start * 10)
                                                    //  ).then(result => { // promise handler function inside .then()
                                                    //  console.log(result); let next = result + start;
                                                    //  return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
                                                    //  }).then(result => { // can explicitly return new promises
                                                    //  console.log(result); let next = result + start;
                                                    //  return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
                                                    //  }).then(result => { // which use the results of previously resolved promises in the chain
                                                    //  console.log(result); let next = result + start;
                                                    //  return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
                                                      // prints 10, 20, 30

                                                      let start = 10;
//new Promise( resolve => setTimeout(() => resolve(start), start * 10)
//).then(result => { // promise handler function inside .then()
//console.log(result); let next = result + start;
//return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
//}).then(result => { // can explicitly return new promises
//console.log(result); let next = result + start;
//return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
//}).then(result => { // which use the results of previously resolved promises in the chain
//console.log(result); let next = result + start;
//return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
//});
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between


                                                      

                                                 
                                                   



