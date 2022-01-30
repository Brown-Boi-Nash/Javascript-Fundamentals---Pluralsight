import { Water } from "./models/water";

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
function Car(id){
  this.carId = id;
}
let fruit = new Car(123);
console.log(fruit.carId);

//!Prototypes
//*Prototypes are shared among all instances of a constructor function.
function Vehicle(id){
  this.carId = id;
}
Vehicle.prototype.start = function(){
  console.log(`Starting ${this.carId}`);
};
let veh = new Vehicle(123);
veh.start();
//!Expanding Objects using Prototypes
String.prototype.hello = function(){
  return this.toString() + ' Hello';
};
console.log('Hello'.hello());

//!Javascript Object Notation - JSON
//*Convert to JSON
let student = {
  id:2093,
  name: "John",
  age: 30
};
console.log(JSON.stringify(student));
//*Convert Array to JSON
let cars = [  {id: 1, name: "Volvo"}, {id: 2, name: "Saab"}];
console.log(JSON.stringify(cars));
//*Parsing JSON
let jsonString = '{"id":2093,"name":"John","age":30}';
let parsed = JSON.parse(jsonString);
console.log(parsed);

//!Array Iteration
let newCars = [  {id: 1, name: "Volvo"}, {id: 2, name: "Saab"}];
newCars.forEach(car => console.log(car));
newCars.forEach((car, index) => console.log(index, car));
//*Array filtering
let newCars2 = [  {id: 1, name: "Volvo"}, {id: 2, name: "Saab"}];
let filtered = newCars2.filter(car => car.id > 1);
console.log(filtered);
//*Array Testing
let newCars3 = [  {id: 1, name: "Volvo"}, {id: 2, name: "Saab"}];
let found = newCars3.every(car => car.id > 1);
console.log(found);
//*Array Finding
let newCars4 = [  {id: 1, name: "Volvo"}, {id: 2, name: "Saab"}];
let found2 = newCars4.find(car => car.id > 1);
console.log(found2);

//?Classes and Modules
//!Classes Basics
//*Classes are a syntactic sugar for creating objects.
class Third{

}
let third = new Third();
console.log(third);
//!Constructors and Properties
// class Car{
//   constructor(id){
//     this.carId = id;
//   }
// }
// let car = new Car(123);
// console.log(car.id);
//!Methods
//class with methods
// class Car{
//   constructor(id){
//     this.carId = id;
//   }
//   start(){
//     console.log(`Starting ${this.carId}`);
//   }
// }
// let car = new Car(123);
// car.start();
//!Inheritance
class Travel{
  constructor(){
    this.type = 'land';
  }
  start(){
    return `Starting ${this.type}`;
  }
}
class Land extends Travel{
  constructor(){
    super();
    this.type = 'land';
  }
  start(){
    return super.start() + '...';
  }
}
let land = new Land();
console.log(land.start());
//!Creating a module
//*Modules are a way to organize code.
//New file created in models folder
//!Importing modules
let water = new Water(123);
console.log(water);

//?Programming the BOM and DOM
//!The window object
//document, location, console, innerHeight, innerWidth, pageXOffset, pageYOffser =>Properties
//alert, confirm, back => Methods
//(not common) => Events
//!Timers
let timeoutId = setTimeout(() => {
  console.log('Timeout');
}, 3000);
clearTimeout(timeoutId);

let intervalId = setInterval(() => {
  console.log('Interval');
}, 3000);
clearInterval(intervalId);
//!The location object
//Properties => href, host, hostname, origin, pathname, port, protocol, search
//Methods => reload, replace, assign, assign(url)
//Events => (not common)
//!The document object
//Properties => body, forms, links
//Methods => createElement(), createEvent(), getElementById(), getElementsByClassName()
//Events => onload, onClick, onkeypress
//!Selecting DOM elements
//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//!Modifying DOM elements
// let element = document.getElementById('my-element');
// element.textContent = 'Hello World';

//?Promises and Error handling
//!Error Handling using try/catch
// try{
//   let x = 1;
//   let y = 0;
//   let z = x/y;
// }catch(e){
//   console.log(e);
// }
//!finally
// try{
//   let x = 1;
//   let y = 0;
//   let z = x/y;
// }catch(e){
//   console.log(e);
// }finally{
//   console.log('Finally');
// }
//!Developer defined errors
// try{
//   throw new Error('My Error');
// }
// catch(e){
//   console.log(e);
// }
//!Creating a Promise
// let promise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'Done');
// });
//!Settling a Promise
// let promise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'Done');
// });
// promise.then(
//  value => console.log(value),
//  error => console.log(error)
//);
//?Data Access Using HTTP
//!HTTP requests using XHR
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//   if(this.readyState == 4 && this.status == 200){
//     console.log(this.responseText);
//   }
// };
// xhttp.open("GET", "http://myid.mockapi.io/api/v1/users", true);
// xhttp.send();
//!HTTP requests using jQuery
// import $ from 'jquery';
// let promise = $.get("http://myid.mockapi.io/api/v1/users");
// promise.then(
//   data => console.log('Data: ', data),
//   error => console.log('Error: ', error)
// )
//!HTTP POST using jQuery
// import $ from 'jquery';
// let promise = $.post("http://myid.mockapi.io/api/v1/users", {
//   name: 'John',
//   email: 'xyz@text.com'
// });
// promise.then(
//   data => console.log('Data: ', data),
//   error => console.log('Error: ', error)
// )

//?Forms
//!Preventing Form Fields
// let form = document.getElementById('my-form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('Form Submitted'); 
// });
//!Accessing form fields
// let form = document.getElementById('my-form');
// form.addEventListener('submit', (e) => {
//   let user = form.elements['user'];
//   console.log(user.value);
//  e.preventDefault();
// });
//!Showing Validation Errors
// let user = form.elements['user'];
// let userError = document.getElementById('user-error');
// if(user.value.length < 4){
//   userError.textContent = 'Username must be at least 4 characters';
//   userError.style.color = 'red';
//   userError.style.borderColor = 'red';
//   user.focus();
//   e.preventDefault();
// }
//!Posting from Javascript

