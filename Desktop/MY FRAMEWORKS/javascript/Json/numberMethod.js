
//Converting a number to a string
// var number =1234
// var str=number.toString()
// console.log(number)

//another way of doing it
// (124).toString()

//Exponentials and decimals
// var x=5.556
// x.toExponential(2)
// x.toExponential(5)


// var x=5.556
// x.toFixed(2)
// x.toFixed(5)


// var x=5.556
// x.toPrecision(2)
// x.toPrecision(5)


// Not a number

// Number("t5")   // not anumber

// "hello" / 5


// Math object
// Math
// Math.PI

// Math.round(4.4) //4
// Math.pow(5,2)//25
// Math.sqrt(25) //5
// Math.ceil(4.4) //5
// Math.floor(4.7)//4
// Math.min(1,2,5,10,-5,100) //-5
// Math.max(1,2,5,10,-5,100)// 100
// Math.random()  // it will give you a number between 0 to 1 everytime you run the code


// assignment

// In this assignment I want you to create a "Random Number Generator".
// You should create a function that takes in 2 numbers. The min and max.
// I want only whole numbers. No decimals.

function randNum(min,max){
    min=Math.ceil(min)
    max=Math.floor(max)
   var num=Math.floor( Math.random()*(max-min)) +min

    console.log(num)
}
randNum(1,1000000)



