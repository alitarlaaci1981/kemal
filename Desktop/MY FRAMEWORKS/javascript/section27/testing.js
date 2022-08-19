//tyoe of test
//actual vs expected
//actual os whst the function returmed
//expected is what you expect to be returned


// happy path
// normal operation like adding 2 numbers

// negative path 

// Function for unit testing


//name is: title of test
//this is a simple



// function test(name,expected, actual) {
//     if(expected === actual){
//         console.log(name +"\nTest passed. Expected " + expected + "is equal to Actual: " + actual + ".")
//     }else{
//         console.log(name +"\nTest failed. Expected " + expected + " is not equal to Actual : " +actual + ".")
//     }
    
// }

// function blah(num) {
//     return num
    
// }

// test("Test if the number input is the same as the output ",2, blah(2))
function test(name,expected, actual) {
    if(expected === actual){
        console.log(name +"\nTest passed. Expected " + expected + " is equal to Actual: " + actual + ".")
    }else{
        console.log(name +"\nTest failed. Expected " + expected + " is not equal to Actual : " +actual + ".")
    }
    
}

function add(num1,num2) {
    return (num1+num2)
    
}

// Happy path
//two postive whole numbers
test("two postive whole numbers", 3, add(1,2))

//One zero and a number greater than zero
test("One zero and a number greater than zero" ,1,add(0,1))

// two 2 digit numbers
test("two 2 digit numbers" , 40, add(30,10))


// a single digit and a double number
test("a single digit and a double number",20, add(2,18))


// a  positive and a  negative number
test("a  positive and a  negative number" , 3, add(-4,7))


// a decimal number and a whole number
test("a decimal number and a whole number" ,5.5,  add(4,1.5))



// a numbr string plus a number
test("a numbr string plus a number",9,  add("4",5))



//  a string plus a string
//failed but you should checj your type on yout function
test(" a string plus a string" ,25,  add("2","5"))



// a boolean plus a string
test(" a boolean plus a string","truehi",add(true,"hi"))

// Missing one argument
test("Missing one argument", null, add(1))

//Missing both arguments
test("Missing both arguments",null, add())




