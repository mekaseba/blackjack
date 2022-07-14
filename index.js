let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
    name: "Meka",
    chips: 4
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function start() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    render()
}

function render() {
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerText = "Cards: "+ cards.join(" ")
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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        render()
   }
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

