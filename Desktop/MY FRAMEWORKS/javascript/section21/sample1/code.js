// var headingText=document.getElementById("heading")
// console.log(headingText)

// var paragraphText=document.getElementsByClassName("content")[1]
// console.log(paragraphText)

// var heading2Text=document.getElementsByTagName("h2")[0]
// console.log(heading2Text)

// console.log(document.body)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.head)



/*Relationships

// var h1Text=document.getElementById("heading").firstChild
// console.log(h1Text)

// var h1sib=document.getElementById("heading").nextElementSibling
// console.log(h1sib)

// var h1par=document.getElementById("heading").parentNode
// console.log(h1par)
*/



/*Changing Html

document.getElementById("heading").innerHTML="This is a Heading"

document.getElementById("logo").alt ="bug"
*/




//Creating new element

var p=document.createElement("p")
var pText=document.createTextNode("New Paragraph")
p.appendChild(pText)

document.getElementById("main").appendChild(p)

var heading=document.getElementById("heading")
document.getElementById("main").insertBefore(p, heading)

var logo=document.getElementById("logo")
document.getElementById("main").removeChild(logo)




//Changing style

document.getElementById("heading").style.color="blue"
document.getElementById("main").style.border="1px black solid"

