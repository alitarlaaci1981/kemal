//let total=0
// for(var i=0;i<10; i++){
//     //total =total + i
//     console.log(i)
// }

// let hello="Hello"
// if(true){
//     const world ="World!"
//    // console.log(x)
//    console.log(hello , world)
// }

//const names= ['john','bob','mary','ali']

// for(isim of names){
//     console.log(isim)
// }

// for(i=0;i<names.length;i++){

//     console.log(names[i])
// // if(i===3)
// // break;
//  }

/*const user= {'firstName':'John','lastName':'Doe'}
for(key in user) 
console.log(user[key]);
*/

// let i=0;

// while(i<10){

//     i++;
//     if(i===5) continue;
//     console.log(i);

// }

// const animals= ['cat','dog','horse','sheep','bird']
// animals.forEach(animal=>{
//     console.log(animal);hm nju
// })

// let count=1;
// let regular_price=195.00;

// console.log(regular_price)
// for(let i=0;i<regular_price;regular_price*2){
//     console.log([i])
// }

// console.log(parseFloat(regular_price)*3);
// console.log(parseFloat(product_total_price));

// const avengers = ["thor", "captain america", "hulk"];
// avengers.forEach((item) => {
//   console.log(item);
// });

// const members= ['Ali',"ilyas","ahmet","yunus"];
// members.forEach((count)=>{
//     console.log(count);

// })

// const members = ["Ali", "ilyas", "ahmet", "yunus"];
// for (var i = 0; i < members.length; i++) {
//   console.log(members[i]);
// }

// var ourArray=[];
// var i=0;
// while(i<20){
//   if(i%2==1)
//   ourArray.push(i)
//   i++;

// }
// console.log(ourArray)

// how to total numbers in the arrat
// var myArr = [ 2, 3, 4, 5, 6];
// var total=0;
// for(var i=0;i<myArr.length;i++){
//   total+=myArr[i]

// }
// console.log(total)

// How to log multi dimensional array
// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// function randomFraction(){
//   let result=0;
//   while(result ===0){
//     result=Math.random()
//   }
//   return result
// }
// let random=randomFraction()
// console.log(random)

// function randomWhole(){
//  return Math.floor (Math.random()*20);
// }
// let result=randomWhole()
// console.log(result)

// Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {

//   return Math.floor(Math.random()*(myMax-myMin+1))+myMin;

// }
// let result=randomRange(1,20)
// console.log(result)

// function convertInteger(str){
//   return parseInt(str)
// }
// var resul=convertInteger("56")
// console.log(resul)

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
  
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch(ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// const myFunction=function(){
//   const myVar="value";
//   return myVar
// }
// let result=myFunction()
// console.log(result)


// const myFunc = () => "value";
// let result=myFunc()
// console.log(result)

// const doubler = (item) => item * 2;
// doubler(4);

//const greeting = (name = "Anonymous") => "Hello " + name;

//console.log(greeting("John"));
//console.log(greeting());

// const user= {
//   name :"Ali",
//   lastName : "Tarlaci",
//   age : 40,
//   city : "West palm Beach"

// }
// const {name,lastName,age,city} =user;

// console.log(user)
// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);

// let arr= ["Today","was","absoulutely","gorgeous","and","beautiful","day"]
// let newArr= arr.splice(0,7)
// console.log(newArr)
// console.log(arr)

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3);
// console.log(todaysWeather)
//console.log(weatherConditions)

// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// let newArray=greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// console.log(newArray)

var fruits1=["banana","apple","orange","carrot","lettuce","tomatoe"]
var fruits2=["grape","mango","strawberry"]
var fruits3=["pear","watermelon","mandarine"]
// var wholeArr=fruits1.concat(fruits2,fruits3);
  //console.log(wholeArr)
//var i= fruits1.indexOf("karayemis")
//var includes=fruits3.includes("pear")
//console.log(includes)
var arr=fruits1.slice(1,4)
console.log(arr)

















