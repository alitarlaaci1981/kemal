// // String length

// var thing ="hello"
// thing.length

// //Using indexes and searching
// var sentence =" I say hello and you say hello"


// // First occurance of string
// sentence.indexOf("hello")

// // last occurance of the string
// sentence.lastIndexOf("hello")

// // Search 
// sentence.search("hello")


// // Taking a slice or substring
// var str="Happy, Excited, Calm"

// var sl=str.slice(7,14)
// console.log(sl)

// sl=str.slice(7)
// console.log(sl)

// sl=str.slice(-13,-6)
// console.log(sl)

// sl=str.slice(-13)
// console.log(sl)

// var str="Happy, Excited, Calm"
// var sb=str.substring(7,14)
// console.log(sb)

// sb=str.substring(7)
// console.log(sb)

// sb=str.substring(-13,-6)
// console.log(sb)


// sb=str.substring(-13)
// console.log(sb)



// var str="Happy, Excited, Calm"
// sr= str.substr(7,14)
// console.log(sr)

// sr=str.substr(7)
// console.log(sr)


// //Replacing content

// var str= " I have turkey for lunch and turkey for dinnre"
// var lunch= str.replace("turkey","pasta")
// console.log(lunch)
// lunch =str.replace("TURKEY", "pasta")
// console.log(lunch)

// lunch= str.replace(/Turkey/i, "pasta")
// console.log(lunch)

// // if you wanna replace the word that repeated more than once in a sentence
// lunch=str.replace(/turkey/g, "pasta")
// console.log(lunch)

// lunch=str.replace(/Turkey/gi,"pasta")  // gi replace everything without case sensitive
// console.log(lunch)




// //Converting to upper , lower, trimming
// var world="happy"
// var upperWord=world.toUpperCase()
// console.log(upperWord)

// var word="HAPPY"
// var lowerWord= word.toLowerCase()
// console.log(lowerWord)

// var sentence= "Hello World!    "
// var clean= sentence.trim()
// console.log(clean)

// // Converting string to an Array

// var str="1,2,3,4,5"
// var arr=str.split(",")

// var str="1 2 3 4 5"
// var arr= str.split(" ")

// var str="12345"
// var arr=str.split("")

// var str="I have a puppy"
// var arr=str.split(" ")
// console.log(arr)







// Converting a string to a numbre

var num="5"
var newNum= Number(num)
console.log(newNum)

newNum=Number("5.5")

newNum=Number("0.5")
c  // it will ignore the space

newNum=Number("t5") // it will  gove you nan

var num=""
num=parseInt("5") // parseInt if you dont wanna have the decimal number

num = parseInt("5.5")

num= parseInt("0.5")
num =parseInt(" 5")

var num=""
num =parseFloat("5")  // parseFloat if you wanna have the decimal number
num=parseFloat("5.5")
num=parseFloat("0.5")
num=parseFloat(" 5")



