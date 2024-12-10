//Advanced Labs

//function makeCounter() {
//    let currentCount = 0;

 //   return function() {
 //   currentCount++;
 //   console.log(currentCount)

 //   }
//}

//let counter1 = makeCounter()
// let counter2 = makeCounter()

 //counter1(); 
 // counter1()


 // function makeCounter2(startFrom) {
 //   let currentcount =startFrom

 //   return function() {
 //   currentCount++
 //   console.log(currentcount)
 //   return currentCount
 //   }
//}



//let counter3 =makeCounter(45)


//counter3()
//counter3()



//function makeCounter3(startFrom, incrementBy) {
 //   let currentCount = startFrom

 //   return function() {
 //       currentCount += incrementBy
 //       console.log(currentCount)
 //   }
 //}

//let counter4 = makeCounter(50, 5)

//counter4()
//counter4()


 //2

 //run problem 2 to solve for A



//function delayMsg(msg)
//{
//console.log(`This message will be printed after a delay: ${msg}`)
//}
//setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
//setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
//setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
//delayMsg('#4: Not delayed at all')

//let fifthTimer =setTimeout(delayMsg,1000)

//clearTimeout(fifthTimer)


//3

//function printMe() {
 //   console.log('printing debounced message')
 //   }
//    printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
 //   1000ms of no calls
 //   setTimeout( printMe, 100);
 //   setTimeout( printMe, 200);
 //   setTimeout( printMe, 300);

//    function debounce(func) {
 //       let timeout
        
 //       return function() {
 //           clearTimeout(timeout)

 //           timeout = setTimeout(func, 1000)
 //       }


 //       function debounce2(func, ms) {
//            let timeout

 //           return function() {
 //               clearTimeout(timeout)

 //               timeout =setTimeout(func,ms)
 //           }
 //       }

 //       function printme2(msg) {
  //          console.log('printing out debounced message for c: ${msg}')
 //       }
 //       printme2 =debounced2(printme2. 1500)

 //       setTimeout( printme2, 100, 'msg #1');
 //       setTimeout( printme2, 200,'msg #2' );
 //       setTimeout( printme2, 300, 'msg #3');

 //       function debounce3(func, ms) {
 //           let timeout

  //           return function() {
 //               clearTimeout(timeout)

 //               timeout =setTimeout(func,ms, msg)
//}

//printMe()
//debounce2('hello')
//debounce3('hello')

//4

//function printFibonacci() {
  //  let first = 1
  //  let second = 1

    //console.log(first)
   // console.log(second)

   // setInterval(function printFibonacci()) {
    //    let next= first + second
    //    console.log(next)
    
    //    first= second
    //    second = next
   // }, 1000)

//}

//function printFibonacciTimeouts() {
 //   let [first, second] = [1,1]
 //   console.log(first)
 //   console.log(second)

//setTimeout(function printNext(first, second){
 //   let next = first + second
  //  console.log(next)

 //   setTimeout(printNext, 100, second, next)
//}, 1000, first, second)
//}

//function printFibonaccilimit(limit) {
 //   let first = 1
 //   let second = 1

 //   console.log(first)
 //   console.log(second)

    
 //   let counter = 2

 //   let intervalRef =setInterval(function printNext()){
  //      let next = first + second
 //       console.log(next)

 //       first= second
  //      second = next
 //       counter++
 //       if (counter == limit) clearInterval(intervalRef)
 //       }, 1000)
//}


//printFibonacci()
//printFibonacciTimeouts(
    //printFibonaccilLimt(4)


   
   // # 5
   
    //let car = {
       // make: "Porsche",
       // model: '911'
       // year: 1964

       // description() {
        //    console.log ('This car is a ${this.make} from ${thisyear})
        //    }
       // }

     //   car.description()

     //   setTimeout(()) => car.description(), 2000

     //   car = {...car, year: 2024}

     //   let describeCar =car.description.bind(car)
        
     //setTimeout(describeCar,4000)

     // car ={...car, year: 2025}

     //-6

    // function multiply(a,b) {
     //   console.log(a*b)
    // }


     //function.protype.delay = function(ms) {
     //  let originalFunction = this
     //   return function(arg1, arg2) {
    //        setTimeout(originalFunction,ms, arg1, arg2)
    //    }
    //}

   // multiply.delay(2000)(5,5)

    //Function.prototype.delay2 =function(ms) {
     //   let originalFunction = this
     //   return function() {
     //       setTimeout(()) => originalFunction.apply(this,arguments),ms
     //   }
    //}
   // function multiply4 (a,b,c,d) {
    //    console.log(a*b*c*d) {
     //   }
        
    //    multiply4.delay2(1000)(5,5,5,5)

        // # 7
    
  // class DigitalClock {
// constructor(prefix) {
// this.prefix = prefix;
// this.timer = null;
// }

 // display() {
// let date = new Date();

// let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
// if (hours < 10) hours = '0' + hours;
// if (mins < 10) mins = '0' + mins;
// if (secs < 10) secs = '0' + secs;
// console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
// }

 // stop() {
// if (this.timer !== null) {
// clearInterval(this.timer);
// this.timer = null;
// }
// }

 // start() {
// this.display();
// this.timer = setInterval(() => this.display(), 1000);
// }
// }

 
// class PrecisionClock extends DigitalClock {
// constructor(prefix, precision = 1000) {
// super(prefix);
// this.precision = precision;
// }

 // start() {
// this.display();
// this.timer = setInterval(() => this.display(), this.precision);
// }
// }

 
// class AlarmClock extends DigitalClock {
// constructor(prefix, wakeupTime = '07:00') {
// super(prefix);
// this.wakeupTime = wakeupTime;
// }

 // checkDisplay() {
// let now = new Date();
// let [currentHours, currentMinutes] = [now.getHours(), now.getMinutes()];
// let [wakeupHours, wakeupMinutes] = this.wakeupTime.split(':').map(Number);

 // if (currentHours === wakeupHours && currentMinutes === wakeupMinutes) {
// console.log('Wake Up!');
// this.stop();
// } else {
// this.display();
// }
// }

 // start() {
// this.timer = setInterval(() => {
// this.checkDisplay();
// }, 1000);
// }
// }

 
// const myAlarmClock = new AlarmClock('my alarm clock:', '19:35');

// myAlarmClock.start();

// # 8


//function orderItems(...itemNames) {
    //return `Order placed for: ${itemNames.join(', ')}`;
    
   // }
    
      //function validateStringArg(fn) {
       // return function (arg) {
       // if (typeof arg !== "string") {
       // throw new Error("Argument must be a string");
       // }
        //return fn(arg);
        //};
        //}
    
     
        //function validateStringArg(fn) {
           // return function (arg) {
           // if (typeof arg !== "string") {
// throw new Error("Argument must be a string");          
//  }
            
            
           // return fn(arg);
           // };
           // }
    
     
        //const validatedOrderItem = validateStringArg(orderItems); // For single argument
        //const validatedOrderItems = validateStringArgs(orderItems); // For multiple arguments
    
     
        //try {
        // Test single argument validation
       // console.log(validatedOrderItem("Apple Watch"))
    
    // console.log(validatedOrderItem(123)); // Should throw an error
    
     
    //console.log(validatedOrderItems("Apple Watch", "Airpods"));
    //console.log(validatedOrderItems("abc", 123)); // Should throw an error
    //} catch (err) {
    //console.log(err.message);
     //   }

// # 9


//function randomDelay() {

// let delay = Math.ceil(Math.random() * 20);
// return new Promise((resolve, reject) => {

// setTimeout(() => {

// if (delay % 2 === 0) {
// resolve(delay)
// } else {
// reject(delay)
// }
// }, delay * 1000)
// });
// }

 

// randomDelay()
// .then((delay) => console.log(`Successful delay of ${delay} seconds`))
// .catch((delay) => console.log(`Failed delay of ${delay} seconds`));

// #10

//import fetch from 'node-fetch'
//globalThis.fetch = fetch;


//function fetchURLData(url) {
//let fetchPromise = fetch(url).then(response => {
//    then((response)) =>
//if (response.status === 200) {
//return response.json();
//} else {
//throw new Error(`Request failed with status ${response.status}`);
//}
//}
//return fetchPromise;
//}

// async function asyncFetchURLData(url) {
// let fetchResponse = await fetch(url);
// if (fetchResponse.status === 200) {
// let responseJson = await fetchResponse.json();
// return responseJson;
// } else {
// throw new Error(`Request failed with status ${fetchResponse.status}`);
// }
// }

 // async function asyncFetchMultipleURLData(urls) {
// return Promise.all(
// urls.map(async (url) => {
// let response = await fetch(url);
// if (response.status === 200) {
// return response.json();
// } else {
// throw new Error(`Request failed with status ${response.status} for URL: ${url}`);
// }
// })
// );
// }

 

// (async () => {
// try {
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// .then((data) => console.log("Promise-based fetch (valid):", data))
// .catch((error) => console.error("Promise-based fetch (error):", error.message));

 
// fetchURLData('https://jsonplaceholder.typicode.com/fake')
// .then((data) => console.log(data))
// .catch((error) => console.error("Promise-based fetch (invalid):", error.message));

 
// let responseData1 = await asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');
// console.log("Async fetch (valid):", responseData1);

 
// try {
// let responseData2 = await asyncFetchURLData('https://jsonplaceholder.typicode.com/fake');
// console.log("Async fetch (invalid):", responseData2);
// } catch (error) {
// console.error("Async fetch (error):", error.message);
// }

 
// let responseData3 = await asyncFetchMultipleURLData([
// 'https://jsonplaceholder.typicode.com/todos/1',
// 'https://jsonplaceholder.typicode.com/todos/2',
// 'https://jsonplaceholder.typicode.com/fake'
// ]);
// console.log("Multiple URLs fetch:", responseData3);
// } catch (error) {
// console.error("General error:", error.message);
// }
// })();







    

















































// #8


function orderItems