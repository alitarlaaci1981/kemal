//while loop
var i=0;
while(i<5){
    console.log(i)
    i++;
}

//do while loop

var i=0;
do{
    console.log(i)
    i++
}while(i<5)

//ehn to use all of this
for(var i=0;i<5; i++){    //when you know how many times you want to loop
    console.log(i)
}


var answer
var areYouHappy=true
while(areYouHappy){  
    answer=prompt("Are you happy") 
    if(answer == "yes") {
    console.log("you are happy")
    }else{
        areYouHappy =false
        console.log("You are not happy")
    }
}



var i=0
do{
    console.log(i)
    i++
}while(i<5)