let suits = [`H`, `C`, `S`, `D`]
let cards = [
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `10`,
  `J=10`,
  `Q=10`,
  `K=10`,
  `A=11`
]
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
console.log(deck)
let compareChoice = () => {
  // if (value < 21) {
  //   btnPlayer.addEventListener(`click`, () => {
  //     testP.drawCard()
  //     console.log(testP)
  //   })
  // } else if (value === 21) {
  //   alert(`Black Jack!!!`)
  // } else {
  // }
}

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
  currentHand() {
    return this.hand
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
  compareChoice()
}
btnPlayer.addEventListener(`click`, () => {
  testP.drawCard()
  console.log(testP)
})
gamePlay()

console.log(testD)
console.log(testP.hand)

btnReset.addEventListener(`click`, () => {
  location.reload()
})

for (let i = 0; i < testP.hand.length; i++) {
  const replaced = testP.hand[i].replace(/\D/g, '')
  console.log(replaced)

  let num
  let z = []
  if (replaced !== '') {
    num = Number(replaced)
    z.push(num)
  }
  console.log(z)
  // let results = z.reduce((x, y) => {
  //   return x + y
  // }, 0)

  // console.log(results)
  // if (results < 21) {
  //   console.log(`hit or stand`)
  // } else if (results === 21) {
  //   console.log(`BlackJack`)
  // } else {
  //   console.log(`try again`)
  // }
}
