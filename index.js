let firstCard = 10
let secondCard = 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false 
let isAlive = true 
let message = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function start() {
    render()
}

function render() {
    cardEl.innerText = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerText += cards[i] + ", "
    }
    sumEl.innerText = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you wanna draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're outta the game!"
        isAlive = false 
    }   
    msgEl.innerText = message
}

function newCard() {
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards)
    render()
}