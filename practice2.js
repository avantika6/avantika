// template literals

// const a= 30;
// const b= 50;
// console.log (`the sum of ${a} and ${b} is ${a+b}`);

// let num1 = 50;
// let num2 = 80;
// let result = (num1 + num2);
// console.log(result);
//console.log (`the sum of ${num1} and ${num2} is ${result}`);
//console.log( " the result of " + num1 + " and " + num2 + " is " + result );

// function greet(){
//     console.log("hello! world");
// }
// greet();

// arrow function

// const greet = (count) =>{
//     for (let i=0; i<count; i++)
//  console.log("hey! watsup");
// }
// greet(2);

// const square =(num) => num + num;
// console.log(square(7));

//  const greet = (count) =>{
//     for (let i=0; i<count; i++)
//     console.log("my name is shubhi");
//  }
//   greet(7);

// callback function
 
// function task(num, callback){
//     callback();
//     console.log(num);
// }
// const add =() => {
//     console.log("using arrow function");
// }
// task("its a callback function", add);

// function task(message, callback){
   
//     console.log(message);
//     callback();
// }
// const add =() =>{
//     console.log("after");
// }
// task("before" , add);


//.forEach ()
//  const numbers =[1,2,3,4,5];
//   numbers .forEach(function(number){
//      console.log(number);
//   });

  //.map
// const numbers =[2,10,3,15];
// const double = numbers.map(function(number){
//     return number *5;
// });
// console.log(double);
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";
// for (let x in cars) {
//   text += cars[x] + " ";}


// const myVehicle = {
//       brand: 'Ford',
//       model: 'Mustang',
//       color: 'red'
//     }
    
//     const updateMyVehicle = {
//       type: 'car',
//       year: 2021, 
//       color: 'yellow'
//     }
    
//     const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//     console.log(myUpdatedVehicle);

const myvehicle ={
    brand: 'ford',
    model
}




// class friend{
//     constructor(name, place){
//         this.name = name;
//         this.place  = place;
//     }
// }
// const myfriend1 = new friend("kriti" ," lucknow");
// const myfriend2 = new friend ("esha" , "mumbai");

// console.log ("my friend name is " + myfriend1.name + " and " + myfriend2.name);
// console.log( myfriend1.name + " lives in " + myfriend1.place);
// console.log( myfriend2.name + " lives in " + myfriend2.place);