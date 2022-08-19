function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s ") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}


function test(name,expected, actual) {
    if(expected === actual){
        console.log(name +"\nTest passed. Expected " + expected + " is equal to Actual: " + actual + ".")
    }else{
        console.log(name +"\nTest failed. Expected " + expected + " is not equal to Actual : " +actual + ".")
    }
    
}

