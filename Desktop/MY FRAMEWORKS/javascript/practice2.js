// function toplam(x,y){
//     console.log(x+y)
// }

// function ciartma(x,y){
//     console.log(x-y)
// }

// (toplam(5,6))
// ciartma(14,7)

// 

//console.log(typeof undefined)

// var firstNum=6
// var secondNum=7
// if(firstNum<10 && secondNum<10){
//     true
// }else{
//     false
// }

// var deneme;
// console.log(typeof deneme)

// const yasakDeger=null
// console.log(typeof yasakDeger)

// function factorial(n){
//     if(n ==0){
//         return 1;
//     }else{
//         return factorial(n-1) * n;
//     }
// }
// console.log(factorial(5))

//console.log("asagidaki satira gecmeyi\nbiliyormusun?\"deneme\"")

//console.log("bir" + "les" + "tir" + "me " + "42")


//console.log(1+1 ==3 && 10 *10 >50)
// const yasakDeger= null
// console.log(6*yasakDeger)

//console.log(true == 1)
//console.log("5" - 1)

//console.log( 3==4 ? "this statement is true": "this statement is wrong")

//console.log(typeof 3 == 3 ? "this is a number" : "this is not a number")

// if(3==4){
//     console.log("1")
// }else{
//     console.log("2")
// }

// let invalidAdresses=[ 
//     "#@%^%#$@#$@#.com",
//     "@example.com",
//     "Joe Smith <email@example.com>",
//     "email.example.com",
//     "email@example@example.com",
//     ".email@example.com",
//     "email.@example.com:",
//     "email..email@example.com",
//     "あいうえお@example.com",
//     "email@example.com (Joe Smith)",
//     "email@example",
//     "email@-example.com",
//     "email@example.web",
//     "email@111.222.333.44444",
//     "email@example..com",
//     "Abc..123@example.com]",
// ]
// function validateEmail(elementValue){      
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailPattern.test(elementValue); 
//   } 
// let email=validateEmail("kemal_tar@hotmail.com")
// console.log(email)

var emailStr =[ 
    "#@%^%#$@#$@#.com",
    "@example.com",
    "Joe Smith <email@example.com>",
    "email.example.com",
    "email@example@example.com",
    ".email@example.com",
    "email.@example.com:",
    "email..email@example.com",
    "あいうえお@example.com",
    "email@example.com (Joe Smith)",
    "email@example",
    "email@-example.com",
    "email@example.web",
    "email@111.222.333.44444",
    "email@example..com",
    "Abc..123@example.com]",
    "kemal_tar@hotmail.com"
] ;


function validateEmailList(raw){
    var emails = raw.split(',')

    var valid = true;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    for (var i = 0; i < emails.length; i++) {
        if( emails[i] === regex.test(emailStr[i])){
            valid = false;
        }
    }
    return valid;
}


console.log(validateEmailList(emailStr))