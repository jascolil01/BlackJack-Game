let suits = [`H`, `C`, `S`, `D`]
let cards = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`]
let deck = []

//////////////////////////////////////////////////
suits.forEach((x) => {
  cards.forEach((y) => {
    deck.push(y + x)
  })
})
// let shuffleDeck = (deck) => {
//   for (let x = deck.length - 1; x > 0; i--) {
//     let z = Math.floor(Math.random() * (x + 1))
//     let temp = deck[x]
//     deck[x] = deck[z]
//     deck[z] = temp
//   }
//   return deck
// }
deck.sort((a, b) => 0.5 - Math.random())

console.log(deck)
