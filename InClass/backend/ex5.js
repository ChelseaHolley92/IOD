// For understanding more about arrays try creating an array that has 5 elements.

let icecreamflavors= [ 'vanilla', 'chocolate','rocky road', 'mint chocolate', 'strawberry' ];

//Replace the value of the element at position 1 and 4.
icecreamflavors[1]= 'cookie dough'; // ['vanilla', 'cookie dough', 'rocky road', 'mint chocolate', 'strawberry']
icecreamflavors[4]= 'cake batter'; // ['vanilla', 'cookie dough', 'rocky road', 'mint chocolate', 'cake batter']

// Add a new element to the beginning of the array
icecreamflavors.unshift('napolean'); // ['napolean', 'vanilla', 'cookie dough', 'rocky road', 'mint chocolate', 'cake batter']

//Remove the element at the end of the array
let lasticecreamflavor =icecreamflavors.pop(); // ['napolean', 'vanilla', 'cookie dough', 'rocky mountain', 'mint chocolate']

//Print the array to the console.
console.log(icecreamflavors);// ['napolean', 'vanilla', 'cookie dough', 'rocky mountain', 'mint chocolate']
