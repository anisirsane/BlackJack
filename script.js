let cards = []
let sum= 0
let hasBlackJack = false
let isAlive = false
let message= document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
function getRandomCard(){
	let num= Math.floor(Math.random()*13+1)
	if (num===1){
		return 11
	}else if(num>10){
		return 10
	}else{
		return num
	}
}
function startGame(){
	isAlive=true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards= [firstCard,secondCard]
	sum=firstCard+secondCard
	renderGame()
}
function renderGame(){
	sumEl.textContent="the sum is "+sum
	cardsEl.textContent="cards: "
	for (let i =0; i <cards.length; i++) {
		cardsEl.textContent+=cards[i] + " "
 	}
	if (sum<=20){
		message.textContent= "do you want a new card "
		
	}else if(sum===21) {
		message.textContent= "you won!!!!!"
		hasBlackJack = true
	}else{
		message.textContent= "you lose"
		isAlive=false
	}
}
function newCard(){
	if(isAlive===true && hasBlackJack===false){
		let card =getRandomCard()
		sum+=card
		cards.push(card)
		renderGame()		
	}

}