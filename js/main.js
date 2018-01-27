console.log("Up and running!")

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
}
};

var flipCard = function (cardID) {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match');
	} else {
		alert('Sorry, try again.')
	}
	console.log('User flipped' + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log('User flipped' + cards[cardID].suit);
	console.log('User flipped' + cards[cardID].cardImage);
checkForMatch();
};

flipCard(0);
flipCard(2);
