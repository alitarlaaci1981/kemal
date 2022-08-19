//array length

var arr=[1,2,3,4,5]
arr.length


//conberting an array to  a string

var arr=["hi","bye","morning"]
var newarr=arr.toString()
console.log(arr)

var arr=["hi","bye","morning"]
var newarr=arr.join(" | ") // this will give us a result of : "hi | bye | morning"
console.log(newarr)

//merging arrays

 var arr1=[1,2,3,4]
 var arr2=[5,6,7,8]
 var arr2=[9,10]
 var newArr=arr1.concat(arr2)
 console.log(newArr)  // this will  give us  [1, 2, 3, 4,5, 6, 7, 8]


 var arr1=[1,2,3,4]
 var arr2=[5,6,7,8]
 var arr3=[9,10]
 newArr=arr1.concat(arr2,arr3)
 console.log(newArr) // this will give us : [1, 2, 3, 4,5, 6, 7, 8,9,10]


//Sorting a string array

var arr=["b","a","c"]
 var newarray=arr.sort()
 console.log(newarray)   // [ 'a', 'b', 'c' ]

 var arr=["b","a","c"]
 var newarray=arr.reverse()
 console.log(newarray) // [ 'c', 'a', 'b' ]


var arr=["b","a","c"]
 console.log(arr)  //  [ 'b', 'a', 'c' ]


//SORTING A NUMBER ARRAY

// var num=[25,5,100]
// var newNum=num.sort()
// console.log(newNum)  //[ 100, 25, 5 ]

// var num=[25,5,100]
// var newNum=num.sort(function(a,b){
//     return a-b
    
// })
// console.log(newNum) //  [ 5, 25, 100 ]



// var num=[25,5,100]
// var newNum=num.sort(function(a,b){
//     return b-a
    
// })
// console.log(newNum) //   [ 100, 25, 5 ]  in reverse order







/* Array for each and a map


var num=[1,2,3,4,5]

function funky(value,index,array){
console.log(index + ":" + value + " & " + array[index] + "\n")
}


num.forEach(funky)
*/





/*MAP   ---> map function returns an array

var num= [1,2,3,4,5]
var newNum

function funky(value,index,array){
     newNum =index + ":" + value + " & " + array[index] + " \n "
     return newNum
    }


newNum=num.map(funky)
console.log(newNum)
*/



/*Array filter
var num=[1,5,10,12,15]

function isEven(value,index,array){
    return value %2 ==0
}
var even=num.filter(isEven)
console.log(even)  // [ 10, 12 ]
*/





































