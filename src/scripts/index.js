console.log("Hello World!");
//?Language features
//!Constants
const carID = 42;
console.log(carID);

//!Let and var
let carName = "Volvo";
console.log(carName);
//let can't work outside a code block

//!Rest parameters
//The rest parameter should be the last parameter in a function's parameter list.
function sendCars(day, ...allCars) {
  allCars.forEach((car) => console.log(car));
}
sendCars("Monday", "Volvo", "Saab", "BMW");

//!Destructuring
//**Arrays */
let carNumbers = [1, 2, 3, 4, 5];
let [first, second, ...therest] = carNumbers;
console.log(first, second, therest);
//**Objects */
let car = { id: 1, name: "Volvo" };
let { id, name } = car;
console.log(id, name);

//!Spread operator
function startCars(car1, car2, car3) {
  console.log(car1, car2, car3);
}
//let carNum = [1,2,3];  //Ouput => 1 2 3
let carNum = "abc"; //Output => a b c
startCars(...carNum);

//!typeof()
console.log(typeof carNum);

//!Common Type Conversions
//** To convert from string to in/float make sure that the start of the num is int */
//foo.toString();
//Number.parseInt('55');
//Number.parseFloat('55.5');

//!Controlling Loops
let i = 0;
for (; i < 12; i++) {
  if (i == 8) {
    break;
  }
  console.log(i);
}


//?Operators
//!Equality operators
//** == */ OR !=
//** === */ OR !== Best Practice to use this

//!Unary operators
//** ++var1 */ OR --var1 */
//** var1++ */ OR var1-- */

//!Logical operators
//** && */ OR || */

//!Relational operators
//** <  OR >  OR <=  OR >=
//**Upper case letters are lower than lowercase letters */
//!Conditional operators
let x = 10;
var result = x > 0 ? "positive" : "non-positive";
console.log(result);

//!Assignment operators
let var1 = 10;
var1+=10;
var1%=2;
var1<<=1;
console.log(var1);

//!Operator precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table


//?Functions and Scope

//!Function scope
//* function startCar(carId){
//*   let message = "Starting...";
//* }
//* console.log(message); //Error(Reference error)

//!Block scope
//* if(5==5){
//*   let message = 'Equal';
//* }
//* console.log('Message'); //Error(Reference error)

//!IIFE's
//*Immediately Invoked Function Expression
let app = (function(){
  console.log("Hello World!");
  return { };
})();
console.log(app);

//!Closures
//*A closure is a function that has access to the parent scope, even after the parent function has closed.
let app2 = (function(){
  let carId = 123;
  let getId = function(){
    return carId;
  };
  return{
    getId: getId
  };
})();
console.log(app2.getId());

//!this Keyword
//*this is a keyword that refers to the current object.
let fn = {
  carId: 123,
  getId: function(){
    return this.carId;
  }
};
console.log(fn.getId());

//!call, apply and bind
//*call and apply purpose is to change the value of this.
let o = {
  carId: 123,
  getId: function(){
    return this.carId;
  }
};
let newCar = { carId: 456};
console.log(o.getId.call(newCar)); //*456
//*apply is similar to call but it takes an array as an argument
let o2 = {
  carId: 123,
  getId: function(prefix){
    return prefix + this.carId;
  }
};
let oldCar = { carId: 456};
console.log(o2.getId.apply(oldCar, ['ID: ']));
//*bind is creating a copy of the function but with the this value set to the object passed as an argument
let o3 = {
  carId: 123,
  getId: function(){
    return this.carId;
  }
};
let mediumCar = { carId: 456};
let newFn = o3.getId.bind(mediumCar);
console.log(newFn()); //*456

//!Arrow functions
//*Arrow functions do not have their own "this" value. They are always bound to the this value of their parent function.
let getId = (prop) => prop + 123;
console.log(getId('ID: '));

//!Default parameters
let trackCar = function(carId, city='NY'){
  console.log(`Tracking ${carId} in ${city}`);
};
console.log(trackCar(123));

//?Objects and Arrays
//!Constructor functions


//!Prototypes


//!Expanding Objects using Prototypes


//!Javascript Object Notation - JSON


//!Array Iteration