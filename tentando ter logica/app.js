function heal(player, card, heal) {
  card.currentLife += heal;
  if (card.currentLife > (card.totalLife + card.fortify))
    card.currentLife = card.totalLife + card.fortify
}

function kill(player, card) {
  return;
}

function attack(player, card, damage) {
  if (card.fortify > 0) {
    card.fortify -= damage;
    if (card.fortify < 0) {
      card.currentLife -= card.fortify;
      card.fortify = 0;
      if (card.currentLife < 0) kill(player, card);
    }
  } else {
    card.currentLife -= damage;
    if (card.currentLife < 0) kill(player, card);
  }
}

class Card {
  constructor(name, hp, effect, type, description) {
    this.name = name;
    this.totalLife = hp;
    if (typeof effect !== 'function') throw new Error('effect must be a funcion')
    else this.effect = effect;
    this.type = type;
    this.turnsBlocked = 0;
    this.fortify = 0;
    this.currentLife = hp;
  }
}

function selectEffect() {
  let dice = Math.floor(Math.random() * 2) + 1;
  if (dice === 1) return ['support', heal];
  if (dice === 2) return ['attack', kill];
}

var arrayOfCards = [];

function generateCards() {
  for (let i = 0; i < 100; i++) {
    effect = selectEffect();
    arrayOfCards[i] = new Card(`Carta ${i}`, Math.floor(Math.random() * 15) + 4, effect[1], effect[0], 'askaksehkashekhase');
  }
}
var players = {
  player1: {
    inHand: [],
    onBoard: [],
    toBuy: [],
  },
  player2: {
    inHand: [],
    onBoard: [],
    toBuy: [],
  }
}

function sortCards() {
  for (let i = 0; i < arrayOfCards.length; i++) {
    if ((i % 2) === 0) players.player1.toBuy.push(arrayOfCards[i]);
    else players.player2.toBuy.push(arrayOfCards[i]);
  }
}

function cardsToHand(player) {
  for (let i = 0; i < 7; i++) {
    var cardIndex = Math.floor(Math.random() * player.toBuy.length);
    player.inHand.push(player.toBuy.splice(cardIndex, 1));
  }
}

generateCards();
sortCards();
cardsToHand(players.player1);
cardsToHand(players.player2);
console.log(players);
// console.log(arrayOfCards);
// arrayOfCards[0] = new Card('Hittler', 5, function () {}, 'effect', 'alguma coisa q to com preguiça de esqcrever')