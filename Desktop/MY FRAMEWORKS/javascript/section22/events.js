function btnPressed(){
    console.log("Button 1 was pressed")
    document.getElementById("p1").innerHTML="Button 1 Pressed"

}
function textTyped(){
    console.log("Text was typed")
    if(document.getElementById("i1").value == "123"){
        document.getElementById("p2").innerHTML="Valid password"

    }else{
        document.getElementById("p2").innerHTML="Invalid password"
    }
   
}

//Event Listeners

document.getElementById("b2").addEventListener("click",btn2Pressed)

function btn2Pressed(){
    console.log("Button 2 was pressed")
    document.getElementById("p3").innerHTML="Button 2 is pressed"

}

document.getElementById("i2").addEventListener("change",tex2Typed)
function tex2Typed(){
    console.log("Text was typed")
    if(document.getElementById("i2").value == "123"){
        document.getElementById("p4").innerHTML="Valid password"

    }else{
        document.getElementById("p4").innerHTML="Invalid password"
    }
}


document.getElementById("p4").addEventListener("mouseover",moused)
function moused(){
    this.innerHTML= "you have been moused"
}