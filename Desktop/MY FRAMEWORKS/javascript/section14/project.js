
// Here are the things that should be included:

// Prompt asking for the amount the user is paying.  Also tell the user how much they owe.

// A function that takes the amount the user paying

// The function should subtract the amount payed from the original cost

// The function should return the difference from the calculation

// You then need a statement that will give 1 of 3 different responses. You can just use the console.log() statement.

// You gave the exact amount.

// You gave too much. Your change due is $x.xx.

// You gave too little. You still owe $x.xx.



let answer=prompt("you owe me $5. please enter the amount you are paying")

function cashier(amount){

    let newCost
    let cost=5

    newCost=cost-amount
    return newCost

}

//cashier(answer)

if(cashier(answer)==0){
    console.log("you gave the exact amount")
}else if(cashier(answer)>0){
    
console.log("you gave too little.you still owe $ "+cashier(answer)+ ".")

}else if(cashier(answer)<0){
    let positiveCost=cashier(answer)*-1


    console.log("you gave too much. your change due is  $ "+positiveCost+ ".")
}