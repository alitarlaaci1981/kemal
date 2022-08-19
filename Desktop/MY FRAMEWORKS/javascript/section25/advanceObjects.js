// Adding properties to objects

var person={
    firstName: "Ali",
    lastName: "Tarlaci",
    favColor: "blue"
}

person.age=38
// Deleting properties

delete person.favColor


//A different way to add methods


var person={
    firstName: "Ali",
    lastName: "Tarlaci",
    myName: function () {
        console.log(this.firstName + " " +this.lastName)
    }
}

var person={
    firstName: "Ali",
    lastName: "Tarlaci",
    myName(){
        console.log(this.firstName + " " + this.lastName)
    }
}

//getters and setters

// Getter gets the value as property
//Setters allows you to update
var person ={
    firstName: "Ali",
    lastName: "Tarlaci",
     get myName(){
        return this.firstName + " " + this.lastName
    },
    set myName(value){
        var name= value.split(" ")
        this.firstName =name[0]
        this.lastName= name[1]

    }
}

