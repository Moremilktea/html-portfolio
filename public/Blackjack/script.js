let cards = []
//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
  name:"Peter",
  chips: 100
}

let playerEl =document.getElementById("player-el")
playerEl.textContent = "Player: " + player.name + " _ " + "Chips:$ " + player.chips
let messageEl = document.getElementById("message-el")
console.log(message) //store the message-el paragraph in variable call messageEl
let sumEl = document.getElementById("sum-el") //Store the sum paragraph in a variable called sumEl for
let cardEl = document.getElementById("card-el")

console.log(cards)
// Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function getRandomCard() {
  let randomNumber = Math.floor((Math.random()*14)+1)
  if (randomNumber > 10) {
    return 10
  }
  else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber}
}
  
 
function startGame () {
  isAlive = true
  let firstCard = getRandomCard() //generate two random numbers
  let secondCard = getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  
  cardEl.textContent = "Cards: " 
  for (i = 0; i<cards.length; i ++) {
    cardEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum //Render the sum on the page using this format -> "Sum: 14"
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false} 

    messageEl.textContent = message //display the message in messageEl using messageEl.textContent
}

function newCard() {
  if (isAlive === true && hasBlackJack === false )
  {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
  }
  
    
}
