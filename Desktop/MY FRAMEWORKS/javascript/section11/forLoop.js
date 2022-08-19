//for loop
//for (starting place; condition,incrementre)

for(var i=1 ; i<10; i++){
    console.log(i)
}

for(var i=1 ; i<5; i++){
    console.log("hello "+i)
}

//never ending loop  very bad for programming code. it can crash your computer
for(var i=1;i<10;i--){
console.log(i)
}

//for  conditinon with if condition
for(var i=1;i<5;i++){
    if(i ==1){
        console.log("Helli")
    }else if(i==2){
        console.log("bye")
    }else if(i==3){
        console.log("yo")
    }else if(i==4){
        console.log("See ya")
    }
}


//breaking the for loop
for(var i=1; i<10;i++){

    if(i==5){
        break;
    }else{
        console.log(i)
}
    }
    
    //for loop withan array

    var things=[1,2,"hello","bye"]

    for(var i =1;i<5;i++){
        console.log(things[i])

    }

    //Activity 

    var answer=prompt("Type YES or NO")
    var answers=["YES","NO"]
    var responses=["You said YES","You said NO","You didnt follow direction"]

    for(var i=0;i<2;i++){
        if(answer!=answers[0] && answer!=answers[1]){
            console.log(responses[2])
            break;
        }else if(answer==answers[i]){
            console.log(responses[i])
        }

    }

    //for loop in a for loop

    var numbers=[1,2,3,4,5]
    var letters=["a","b","c",]

    for(var i=0;i<5;i++){
        console.log(numbers[i])
        for(var t=0;t<3;t++){
            console.log(letters[t])
        }

    }

    //square

var square=""

    for(var i=0;i<5;i++){
       for(var t=0;t<9;t++){
        square =square + "*"
    }
    square =square +"\n"
}
console.log(square)

//project: the trangle

var triangle=""
for(var i=0;i<5;i++){
    for(var t=0;t<=i;t++){
        triangle=triangle + "*"
    }
    triangle=triangle + "\n"
}
console.log(triangle)

//alternative solutions
var triangle=""
for (i = 0; i < 5; i++){
console.log(triangle)
    
    for (t = 0; t < 1; t++ ) {
    
    triangle = triangle + "*"
    }
    triangle = triangle
    }


//alternative solutions 3
    var triangle=""
    for (i = 0; i < 5; i++){
        triangle=triangle + "*"
    console.log(triangle)

    }
   
  