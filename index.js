let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function start() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    render()
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) +1 
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11 
    } else {
        return randomCard
    }
}

