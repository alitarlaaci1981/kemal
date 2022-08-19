function btn1Clicked() {
    document.getElementById("p2").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function charsTyped() {
    var chars = document.getElementById("i1").value

    createString(chars)
}

function createString(someString) {
    document.getElementById("p2").innerText = "Characters typed: " + someString
}

document.getElementById("b2").addEventListener("click", btn2Clicked)

function btn2Clicked() {
    var main = document.getElementById("mains")
    var child = document.getElementById("p5")

    main.removeChild(child)
}

document.getElementById("i2").addEventListener("change", valueEntered)

function valueEntered() {
    var size = document.getElementById("i2").value.length

    document.getElementById("p4").style.fontSize = (size*2) + "em"
}