//var container =["bob","joe","sam"]

var stuff =[1,2,3,"test", true]

var container=["blue","yellow","red","brown"]

container.push("orange")

//shift snd unshift

// var container=["blue","yellow","red","brown"]
// container.shift()
// container.unshift()

// var container=["red","blue","yellow","brown"]

// container[0]="purple"

// var container=["red","blue","yellow","brown"]

// container.splice(0,0,"black")// add black to the  front
// container.splice(0,1) //remove the first element
// container.splice(0,1,"black") //remove first element and insert black


// var container=["red","blue","yellow","brown"]
//  var newContainer=container.slice(3)



//  var things =[]
//   var answer

//   answer = prompt("what is  your favorite thing")
//   things.push(answer)

//   answer =prompt("what is your second favorite thing?")
//   things.push(answer)

//   answer =prompt("what is your third favorite thing")
//   things.push(answer)

//   console.log(things)

var books =[]
var answer

answer =prompt("what is your first book")
books.push(answer)

answer =prompt("what is your second book")
books.push(answer)

answer =prompt("what is your third book")
books.push(answer)

answer =prompt("what is your fourth book")
books.push(answer)

answer =prompt("what is your fifth book")
books.push(answer)

answer =prompt("what is your sixth book")
books.unshift(answer)

books.pop()
console.log(books)

