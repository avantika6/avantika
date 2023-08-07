//TEMPLATE LITERALS
/*
const a = 30;
const b = 20;
console.log(`the sum of ${a} and ${b} is ${a+b}`);
*/
/*let num1 = 7;
let num2 = 4;
let result = num1 + num2 ;
console.log(result);*/
/*let num1 = 7;
let num2 = 4;
let result = num1 + num2 ;
console.log(`the addition of ${num1} and ${num2} is ${result}`);
console.log(`my name is avantika srivastava`);
//console.log("the addition of "+ num1 +" and "+ num2 +" is" + result );*/
 

//ARROW FUNCTION

// function greet(){
//     console.log("hello world");
// }
// greet();
// conversion of above function into arrow fuinction

//   const greet = (count) =>{
//     for (let i=0; i<count; i++)
//     console.log("hello world");
// }
// greet(6);
//  const square = (num) => num + num;
//  console.log(square(6));
  

// const greet = (count) =>{
//     for(let i=0; i<count; i++)
//     console.log("hello everyone");
// }
// greet(6);


//CALLBACK FUNCTION
/*
function task(message, callback){
    callback();
    console.log(message);
   
}
const add =() => {
    console.log("using arrow function");
}
task("its a callback function", add); */


/*function task(num, callback){
    callback();
    console.log(num);
}
const add =() =>{
    console.log("first function");
}
task("second function" , add);       */

/*
function task(num, callback){
    callback();
     console.log(num);
   
}
 const add =() =>{
    console.log("hello");
 } 
 task("everyone" ,add);  */

/*
 function task(message, callback){
    console.log(message);
    callback();
 }
 const add =() =>{
    console.log("hey! i am callback");
 }
 task("hello! i am message", add); */
/*
 function task(message, callback){
    callback();
    console.log(message);
 }
 const add = () =>{
    console.log("hey! im callback");
 } 
 task("hello! im message" , add);*/

 // .forEach()
//  const numbers =[1,2,3,4,5];
//  numbers .forEach(function(number){
//     console.log(number);
//  });

// .map()
// const numbers =[2, 10, 3];
// const doubled = numbers.map(function(number){
//     return number * 4;
// });
// console.log(doubled);

// const names = ['clara', 'ishmael', 'zehra', 'luke'];
// const capitalised = names.map(function(name){
//     return name[0]; toUpperCase()+name.slice(1);
// });
// console.log(capitalised);

// .filter
/*const words =[
    'cat',
    'discombobulate',
    'dog',
    'lion',
    'zebra',
    'owl',
];
const threeLettersWords = words.filter(function(word){
    return word.length===3;
});
console.log(threeLettersWords);*/

/*var li = `
  <li>
    <div class="row">
      <div class="col-md-4">
        <img src="${moviePoster}" height="250" alt="" />
      </div>
      <div class="col-md-8">
        <h2>${movieTitle}</h2>
      </div>
    </div>
  </li>
`;*/

//ARROW FUNCTION
/*
const multiply = (num1, num2) => num1 * num2;

const toCelsius = fahrenheit => (5/9) * (fahrenheit-32);

const padZeros = (num, totalLen) => {
  let numStr = num.toString();
  let numZeros = totalLen - numStr.length;
  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};

const power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const greet = who => {
  console.log("Hello " + who);
};
*/

//Block Scope
/*
var callbacks = [];
for (let i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) });
}

callbacks[2]();
*/
/*
const account = {
    username: "marijn",
    password: "xyzzy"
  };
  
  account.password = "s3cret"; 
  
  console.log(account.password);
  */
/*
  const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}*/
/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let x in cars) {
  text += cars[x] + " ";
}
*/

// const person= [
//   {
//     name:"avantika",
//    course:"bca",
//    add: "gomti nagar"
//   },
//   {
//     name:"shubhi",
//     course:"b.tech",
//     add:"nishatganj"
//   },
//   {
//     name:"avantika",
//     course:"mca",
//     add:"gomti nagar"
//   }
// ]

// this function shows the index number
// for (const item in person){
//   console.log(item);
// }


// this function is used for the map
// const people = person.map (students =>students.name=="esha");
//console.log(people);

//this function is used for the filter
//const people = person.filter (student => student.add=="gomti nagar");
//console.log(people);

//this funvtion is used for the find

//const people = person.find(student => student.name=="avantika");
//console.log(person);


//ARROW FUNCTION

// const toCelsius = fahrenheit => (5/9) * (fahrenheit - 32);
// const temperatureInFahrenheit = 77;
// const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
// console.log(temperatureInCelsius); 
  

// const toCelsius = fahrenheit => (5/9) * (fahrenheit - 32);
// const temperatureInFahrenheit = 77;
// const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
// console.log(temperatureInCelsius);

// const padZeros = (num, totalLen) => {
//   let numStr = num.toString();
//   const numZeros = totalLen - numStr.length;
//   for (let i = 1; i <= numZeros; i++) {
//     numStr = "0" + numStr;
//   }
//   return numStr;
// };
// const paddedNum = padZeros(7, 4);
// console.log(paddedNum); // Output: "0007"


// const power = (base, exponent) => {
//   var result = 1;
//   for (var i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }
// const result = power(2, 3);
// console.log(result); 




// const greet = (who) => {
//   console.log("Hello " + who);
// };
// greet("avantika");

// ques 1:  function greet(who) {
//  console.log("Hello " + who);}

// const greet =(who) =>{
//   console.log("hello", who);
// };
// greet("shubhi");


// ques 2:  function power(base, exponent) {
//   var result = 1;
//   for (var i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// const power = (base,exponent) => {
// var result =1;
// for (var i=0; i< exponent; i++){
//   result *= base;
// }
// return result;
// }
// const result =power(3,4);
// console.log(result);

// ques 3: function multiply(num1, num2) {
  //return num1 * num2;}

// const multiply =(num1, num2) => {
//   console.log (num1 * num2);
// }
// multiply(6,7);

// ques 4:  function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }
//  const toCelsius =(fahrenheit) => (7/9)  *(fahrenheit -36);
//  const temperatureInFahrenheit = 79;
//  const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
//  console.log(temperatureInCelsius);

// ques 5: function padZeros(num, totalLen) {
//   var numStr = num.toString();             
//   var numZeros = totalLen - numStr.length; 
//   for (var i = 1; i <= numZeros; i++) {
//     numStr = "0" + numStr;
//   }
//   return numStr;
// }


// const padZeros = (num, totalLen) =>{
//   var numStr = num.toString();
//   var numZeros = totalLen - numStr.length;
//   for (var i=1; i<numZeros; i++){
//     numStr ="0" + numStr;
//   }
//   return numStr;
// }
// const paddednum = padZeros(7,4);
// console.log(paddednum);

//Template literals
// const li =` <li>
//   <div class="row">
//   <div class="col-md-4">
//     <img src="' + moviePoster + '" height="250" alt="" />
//   </div>
//   <div class="col-md-8">
//      <h2> movieTitle </h2>
//   </div>
//    </div>
// </li>
// `;


// const li = `
//   <li>
//   <div class="row">
//   <div class="col-md-4">
//   <img src="${moviePoster}" height="250" alt="" />
//   </div>
//   <div class="col-md-8">
//   <h2>${movieTitle}</h2>
//   </div>
//   </div>
//   </li>
// `;

//FOR EACH
// const numbers = [1, 2, 3, 6];
// let sum = 0;

// numbers.forEach(x => {
//   sum += x;
// });

// console.log(sum);

// const numbers =[6,5,8,4];
// let sum = 0;
// numbers.forEach( x =>{
//   sum += x;
// });
// console.log(sum);
//MAP

// const numbers = [1, 2, 3, 4];
// const square = x => x * x;
// const squaredNumbers = numbers.map(square);

// console.log(squaredNumbers); 

// const numbers = [8, 6, 7, 9];
// const square = x => x * x;
// const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers);
//FILTER

// const numbers = [1, 2, 3, 4];
// const isEven = x => x % 2 === 0;
// const evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isEven = x => x % 2===0;
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);


//DESTRUCTURING
// const name = ['shubhi', 'esha', 'kanak', 'priyam', 'reena', 'seema', 'sashi', 'shanu'];
// const[n1, n2, n3, n4, ...n5] =name;
// console.log(n5);


// const person= {
//   name: "saurabh",
//   age: "31",
//   course: "mba",
//   address: "wari nibbi wari near handia chauraha",

// }
// const person2 = {...person}
// person2.name="gola";
// console.log(person2);

// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const updateMyVehicle = {
//   type: 'car',
//   year: 2021, 
//   color: 'yellow'
// }

// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// console.log(myUpdatedVehicle);

// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }
// const updateMyVehicle ={...myVehicle}
// updateMyVehicle.brand="BMW";
// console.log(updateMyVehicle);

// let a,b, rest;
// //[a, b]= [60,70];
// //console.log(a);
// //console.log(b);

// [a, b, ...rest] =[20 ,  40 , 60, 70 , 80, 90, 100];
// console.log(rest);

// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;
 //console.log(red); 
 //console.log(yellow); 
// console.log(green); 

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); 
// console.log(b); 

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); 
  
//  const { a: aa = 10, b: bb = 5 } = { b: 3 };

// console.log(aa); // 3
// console.log(bb); // 5
 

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const newStudent1 = new Student("Neha", 19);
// const newStudent2 = new Student("Manya", 21);

// console.log( " the age of " + newStudent1.name + " is " + newStudent1.age);
// console.log( " the age of " + newStudent2.name + " is " + newStudent2.age);
// console.log(  newStudent2.name + " and " + newStudent1.name + " are best friends.");


// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;

//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myCar = new Car("Ford", 2014);
// console.log("My car " + myCar.name + " is " + myCar.age() + " years old.");


// class friend{
//   constructor(name, place){
//     this.name = name;
//     this.place = place;
//   }
// }

// const myFriend1 = new friend("Shanu", "Prayagraj");
// const myFriend2 = new friend("Sashi", "Wari");

// console.log("My friend name is " + myFriend1.name + " and " + myFriend2.name);
// console.log( myFriend1.name + " lives in " + myFriend1.place);
// console.log( myFriend2.name + " lives in " + myFriend2.place);

// class score {
//   constructor( name, marks){
//     this.name = name;
//     this.marks = marks;
//   }
// }

// const newScore1 = new score ("Saurabh", 92);
// const newScore2 = new score ("Varsha", 84);
// const newScore3 = new score ("Gaurav", 98);
// const newScore4 = new score ("Seema", 89);
// const newScore5 = new score ("Shubhi", 99);
// const newScore6 = new score ("Gauri", 90);
// const newScore7 = new score ("Garv", 95);
// const newScore8 = new score ("Sashi", 72);

// console.log(newScore1.name + " got " + newScore1.marks + "% in exam.");
// console.log(newScore2.name + " got " + newScore2.marks + "% in exam.");
// console.log(newScore3.name + " got " + newScore3.marks + "% in exam.");
// console.log(newScore4.name + " got " + newScore4.marks + "% in exam.");
// console.log(newScore5.name + " got " + newScore5.marks + "% in exam.");
// console.log(newScore6.name + " got " + newScore6.marks + "% in exam.");
// console.log(newScore7.name + " got " + newScore7.marks + "% in exam.");
// console.log(newScore8.name + " got " + newScore8.marks + "% in exam.");
 
// console.log( newScore5.name + " got first position in class with " + newScore5.marks + "%");
// console.log( newScore3.name + " got second position in class with " + newScore3.marks + "%");
// console.log( newScore7.name + " got third position in class with " + newScore7.marks + "%");


// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }

// const date = new Date();
// let year = date.getFullYear();

// const myCar = new Car("Ford", 2015);
// console.log("My car is " + myCar.age(year) + " years old.");

// class person {
//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }

// age(x){
//   return x - this.year;
// }
// }
// const date = new Date();
// let year = date.getFullYear();

// const myPerson = new person ("shubhi", 1999);
// console.log(  myPerson.name + " is " + myPerson.age(year) + " years old.");

class fruits {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
}
const newFruits1 = new fruits ("mango", "yellow");
const newFruits2 = new fruits ("apple", "red");
const newFruits3 = new fruits ("guava", "green");

console.log(newFruits3.name + " is " + newFruits3.color +  " in color "  );