let suits = [`H`, `C`, `S`, `D`]
let cards = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`]
let deck = []
let btnPlayer = document.getElementById(`player`)
let btnReset = document.getElementById(`reset`)
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
testP = new playerHand()
testD = new dealerHand()
let gamePlay = () => {
  testP.drawCard()
  testP.drawCard()

  testD.drawCard()
  testD.drawCard()
}
btnPlayer.addEventListener(`click`, () => {
  testP.drawCard()
  console.log(testP)
})
gamePlay()

console.log(testD)
console.log(testP)

btnReset.addEventListener(`click`, () => {
  location.reload()
})
