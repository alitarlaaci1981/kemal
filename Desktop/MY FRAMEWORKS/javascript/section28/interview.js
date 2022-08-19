
//function add stuff
// takes 2 params/
// param 1 is a number

const { string } = require("joi")



// palindrome





function pal(word) {
   
//split word to array 
let splitWord=word.split("")
//reverse array
splitWord.reverse()
//join array
splitWord.join("")




if(word.toLowerCase() === word.toLowerCase()){
    return true
}
    
}

let palin= pal("true")

console.log(palin)


