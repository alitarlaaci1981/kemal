/*pop() method : removes last array element from array

const myFriends=['Seb','Kevin','Raza','Mike'];
console.log(myFriends.length)
let friendsPop= myFriends.pop();
console.log(myFriends);
console.log(friendsPop);
console.log(myFriends.length)

*/
//===============================================================================================================================

/*
//push() method : adds one or more element to the back of the array

const fruits= ['apple','banana','mango','cherry'];
console.log(fruits);
console.log(fruits.length)
let fruitsPush=fruits.push('watermelon','pineapple');
console.log(fruits)
console.log(fruitsPush)
console.log(fruits.length)

*/

//================================================================================================================================

/*
//shift() method removes the first element of an array and returns the removed element
const cocktails = ['margarita','martini','pisco sour','old fashioned'];
console.log(cocktails.length)
console.log(cocktails)
let cocktailsShift=cocktails.shift();
console.log(cocktails);
console.log(cocktailsShift);
console.log(cocktails.length)

*/

//================================================================================================================================

/*
//unshift() method: adds one or more elements to the start of an array
const koreanFood=['kimchi','bulgogi','gimbap'];
console.log(koreanFood);
console.log(koreanFood.length);
let koreanFoodUnshift= koreanFood.unshift('hangover stew');
console.log(koreanFood);
console.log(koreanFoodUnshift);
console.log(koreanFood.length)
*/

//================================================================================================================================

/*
//slice() method: selects a chunk of an array and returns a new array  with a copy of all elements selected from the start index to the end index.

const pizza= ['pepperoni','cheese','hawaiian','buffalo','margherita','bbq'];
console.log(pizza.slice(0,3));
console.log(pizza.slice(1,2));
console.log(pizza.slice(1,3))
console.log(pizza.slice(1,4))
console.log(pizza.slice(2,3))
console.log(pizza.slice(3))

*/

//===============================================================================================================================

/*
// splice() method: it removes ,replace or adds new element to the array

const genre = ['thriller','horror','fantasy','drama','comedy'];
//console.log(genre.splice(1,4));
//console.log(genre)
//console.log(genre.splice(1,0,'bye'));
//console.log(genre)
//console.log(genre.splice(2,2,'anime'))
//console.log(genre)

*/

//================================================================================================================================

//join() method: returns a new string of array elements either seperated by commas or a specified seperator
/*
const introduction= ['hi','my','name','is','Yuri'];
console.log(introduction.join());
console.log(introduction.join(', '));
console.log(introduction.join(' '))
console.log(introduction.join(''))
console.log(introduction.join(' . '))

*/

//================================================================================================================================
/*
// toStiring() method: converts an arrat into a string
const arr= ['Hello','how','are','you'];
let arrToStr=arr.toString();
console.log(arrToStr)
*/

//================================================================================================================================
/*
const nums=[1,2,3,4,5,6,7,8,9,10];
nums.forEach(num => 
   console.log(num) 
    );
*/
//forEach()method: loop through the elements of an array .For every array element, it executes a callback function

//================================================================================================================================
/*
//filter()method: returns new array that filters our elements form an array
const nums=[1,2,3,4,5,6,7,8,9,10];
let filteredNums=nums.filter(num =>{
    return num %2==0
});
console.log(filteredNums)

*/
//================================================================================================================================

/*
includes() method: checks if the array includes the item passed to the method. it returns either trueor false
*/
/*
const nums=[1,2,3,4,5,6,7,8,9,10];
let numsIncludes=nums.includes(2);
console.log(numsIncludes);
*/

//================================================================================================================================
    
/*map() method: creates a new array with the return value of the callback function called on each element in the array
*/
/*
const nums=[1,2,3,4,5,6,7,8,9,10];
let numsMap=nums.map(function(num){
    return num * 3
})
console.log(numsMap);
*/

//================================================================================================================================
/*
Array.from() method: creates a new real array from an array like iterable object. usefull when working map(),filter etc methods
*/
/*
function func(...args){
    return Array.from(arguments);

}
console.log(func('hi',1,2,3,'bye'));
*/

//================================================================================================================================

/*
concat()method:merges 2 or more arrays into a new array
*/
/*
const boys=['kevin','brian','jack',];
const girls=['mary','sebina','stella']

let boysAndGirls=boys.concat(girls)
console.log(boysAndGirls)
console.log(boys);
console.log(girls)
*/

//================================================================================================================================
/*
reverse() method: reverse an array; first element becomes last, and the last becomes first. it changes the original array and returns the reversed array
*/
/*
const colors=['yellow','pink','black','purple'];
let colorsReversed=colors.reverse();
console.log(colorsReversed);
*/

//================================================================================================================================
/*
sort()method: sorts the element of an array in ascending order. This means is that it first converst the elements into strings,
then compares its code(UTF-16). it changes the original array, and returns sorted arrat
*/
/*
const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];
let sortDays=days.sort()
console.log(sortDays);
*/
//================================================================================================================================
/*
every()method: test if every element in an array passes the test implemented by the callback function. it returns boolean value
if all elements in the array return true, when passed the function ,every() returns true. 
*/
/*
const teenager=[13,14,15,16,17];
const adult=[18,19,20,21,22];

let isAdult=teenager.every(age=>
    age >=18);
    console.log(isAdult);

    isAdult=adult.every(age =>
        age >=18);
        console.log(isAdult);
let isTeenager=adult.every(age=>
    age >=18)   
    console.log(isTeenager)  ;

*/
//================================================================================================================================
/*
some() method: similar to every(), some() returns true if any element in the array passes the test implemented by the callback function. every element isnt required to pass the call back function; if one elements returns true, some() methods returns true
*/
/*
const greaterThan5=[1,2,3,4,5,6,7,8,9];
const notGreaterThan5=[1,2,3,4,5];

let someGreaterThan5=greaterThan5.some(num=> num>5);
let noneGreaterThan5=notGreaterThan5.some(num=> num>5);

console.log(someGreaterThan5)
console.log(noneGreaterThan5)
*/
//================================================================================================================================
/*reduce()method: reduces the array into a single element. it passes the return value of the previous element on the callback 
function. 
*/
/*
let reduceNums=[1,2,3,4,5,6].reduce((accumulator,currentValue) =>{
    return accumulator+currentValue;

})
console.log(reduceNums)
*/
//================================================================================================================================
/*findIndex() method: returns the index of the first element in the array that satisfies the callback function. if no elements pass the test provided by the callback function,findIndex() returns -1. 
*/
/*
const nums=[1,2,3,4,5,6,7,8];
let indexNum=nums.findIndex(num => num %2===0)
console.log(indexNum)
*/


