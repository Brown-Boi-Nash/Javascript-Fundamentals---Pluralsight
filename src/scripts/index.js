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