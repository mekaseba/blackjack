let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard + 3

if (sum < 21) {
    console.log("Do you wanna draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're outta the game. 😭")
}