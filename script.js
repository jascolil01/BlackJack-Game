let suits = [`H`, `C`, `S`, `D`]
let cards = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`]
let deck = []

//////////////////////////////////////////////////
suits.forEach((x) => {
  cards.forEach((y) => {
    deck.push(y + x)
  })
})

deck.sort((a, b) => 0.5 - Math.random())

class playerHand {
  constructor() {
    this.hand = []
  }
  drawCard() {
    let x = deck[0]
    deck.shift()
    this.hand.push(x)
    return deck
  }
}
class dealerHand {
  constructor() {
    this.hand = []
  }
  drawCard() {
    let x = deck[0]
    deck.shift()
    this.hand.push(x)
    return deck
  }
}
// test = new playerHand()
// test.drawCard()
// test.drawCard()
// console.log(test)
// console.log(deck)
