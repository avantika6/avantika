/*function task(){
console.log(a);
var a=5;
console.log(a);
}
task();
}*/


/*
function task() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  
  task();*/
  

/* const person={
    name:"avantika",
    age:23,
    email:"av@gmail.com",
    address:{
      location:"lko",
      street:1090
    },
  }
  console.log(person.address.location);

*/


/*const person={
    name:"xyz",
    age:19,
    email:"xyz@gmail.com",
    adress:{
      location:"lko",
      street:1090
    },
    task(){
      console.log("hello");
    }
  }
  
  person.task();*/



 /* const person={
     name:"avantika",
     age:22,
     email:"xyz@gmail.com"
  }
  console.log(person.name);*/

  /*const person={
name:"avantika",
surname:"srivastava",
email:"ava@gmail.com",
address:{
    street:"gomti nagar",
    location:"lucknow"
}

  }
  
  console.log(person.address.location);*/

//template literals


//  const a =50;
//  const b=90;
 
//  console.log(`the sum of ${a} and ${b} is  equal to ${a+b}`);

// arrow function & callback function
 /*const task = (num,callback) => {
    
    callback();
    console.log(num);
 }

 const add=()=>{
    console.log("hello world");
 }
    task("hey",add);

*/

//template literals
// const a =67;
// const b =81;

// console.log(`the multiplication of ${a}and ${b} is equal to ${a*b}`);

// callback function

/*function task(message, callback) {
    console.log(message);
    callback();
  }
  
  const add = () => {
    console.log("its a new function");
  }
  
  task("its a callback function", add);*/
  

  /*function task(num, callback) {
    console.log(num);
    callback();
  }
  
  const add = () => {
    console.log("how's you?");
  }
  
  task("hey!", add);*/
/*
  function task(message, callback) {
    
    console.log(message);
    callback();
  }
  
  const add = () => {
    console.log("my new function");
  }
  
  task("did you understand?", add);
  
  */

  // const multiply = (num1, num2)=> {
  //   console.log(num1 * num2);
  // }
  // multiply(9,9);


  //const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // const a=num.map(num => num*2);
  // //console.log(a);
  // console.log(num);



  //const b=num.find(num => num%2==0);
  //console.log(b);
  //console.log(num);

  // const person= [
  // {
  //   name:"john",
  //   class:'aa',
  //   sports:"football"
  // },
  // {
  //   name:"kenil",
  //   class:'bb',
  //   sports:"basketball"
  // }, {
  //   name:"kenil",
  //   class:'bb',
  //   sports:"cricket"
  // }
  // ]


  
  // for (const item in person){
  // console.log(item);
  //   }

  // const people = person.filter(student => student.name=="kenil").find(student =>student.sports=="cricket");
  // console.log(people);
  

//   const fruits = person.forEach(student=> student.add="lko");
// console.log(person);

// const name = [ 'john', undefined , 'honey', 'lucy', 'henry','ygyhuh'];
// const [n1,  n2= "not available",...n3] = name;
// console.log(name);

// const person = {
// name: "john",
// age: "22",
// course: "bca",
// address: "lko"
// }
// const { name="jhji", age:dob, ...rest} = person;
// console.log(rest);



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const num2 = [...num];
console.log(num2);

const person = {
  name: "john",
  age: "22",
  course: "bca",
  address: "lko"
  }
  const person2 ={...person};
  person2.name= "henry";
  console.log(person);