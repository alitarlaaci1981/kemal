//Constructors
// blue pritn of an object
var me={
    firstName: "Ali",
    lastName: "Tarlaci",
    myName(){
        console.log(this.firstName + " " + this.lastName )
    }
}

var bestFriend= {
    firstName: "bob",
    lastName: " jones",
    myName(){
        console.log(this.firstName + " " + this.lastName)
    }
}


// BobJones  pascal case
// bobJones camel case
function Person (first, last) {
    this.firstName=first
    this.lastName=last
    this.myName= function () {
        console.log( this.firstName + " " + this.lastName)
    }
   
}

