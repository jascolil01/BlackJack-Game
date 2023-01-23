let deck = {
  aceH: {
    name: `Ace of Hearts`,
    value: 1
  },
  twoH: {
    name: `Two of Hearts`,
    value: 2
  },
  threeH: {
    name: `Three of Hearts`,
    value: 3
  },
  fourH: {
    name: `Four of Hearts`,
    value: 4
  },
  fiveH: {
    name: `Five of Hearts`,
    value: 5
  },
  sixH: {
    name: `Six of Hearts`,
    value: 6
  },
  sevenH: {
    name: `Seven of Hearts`,
    value: 7
  },
  eightH: {
    name: `Eight of Hearts`,
    value: 8
  },
  nineH: {
    name: `Nine of Hearts`,
    value: 9
  },
  tenH: {
    name: `Ten of Hearts`,
    value: 10
  },
  jackH: {
    name: `Jack of Hearts`,
    value: 10
  },
  queenH: {
    name: `Queen of Hearts`,
    value: 10
  },
  kingH: {
    name: `King of Hearts`,
    value: 10
  },
  aceS: {
    name: `Ace of Spade`,
    value: 1
  },
  twoS: {
    name: `Two of Spade`,
    value: 2
  },
  threeS: {
    name: `Three of Spade`,
    value: 3
  },
  fourS: {
    name: `Four of Spade`,
    value: 4
  },
  fiveS: {
    name: `Five of Spade`,
    value: 5
  },
  sixS: {
    name: `Six of Spade`,
    value: 6
  },
  sevenS: {
    name: `Seven of Spade`,
    value: 7
  },
  eightS: {
    name: `Eight of Spade`,
    value: 8
  },
  nineS: {
    name: `Nine of Spade`,
    value: 9
  },
  tenS: {
    name: `Ten of Spade`,
    value: 10
  },
  jackS: {
    name: `Jack of Spade`,
    value: 10
  },
  queenS: {
    name: `Queen of Spade`,
    value: 10
  },
  kingS: {
    name: `King of Spade`,
    value: 10
  },
  aceC: {
    name: `Ace of Club`,
    value: 1
  },
  twoC: {
    name: `Two of Club`,
    value: 2
  },
  threeC: {
    name: `Three of Club`,
    value: 3
  },
  fourC: {
    name: `Four of Club`,
    value: 4
  },
  fiveC: {
    name: `Five of Club`,
    value: 5
  },
  sixC: {
    name: `Six of Club`,
    value: 6
  },
  sevenC: {
    name: `Seven of Club`,
    value: 7
  },
  eightC: {
    name: `Eight of Club`,
    value: 8
  },
  nineC: {
    name: `Nine of Club`,
    value: 9
  },
  tenC: {
    name: `Ten of Club`,
    value: 10
  },
  jackC: {
    name: `Jack of Club`,
    value: 10
  },
  queenC: {
    name: `Queen of Club`,
    value: 10
  },
  kingC: {
    name: `King of Club`,
    value: 10
  },
  aceD: {
    name: `Ace of Diamonds`,
    value: 1
  },
  twoD: {
    name: `Two of Diamonds`,
    value: 2
  },
  threeD: {
    name: `Three of Diamonds`,
    value: 3
  },
  fourD: {
    name: `Four of Diamonds`,
    value: 4
  },
  fiveD: {
    name: `Five of Diamonds`,
    value: 5
  },
  sixD: {
    name: `Six of Diamonds`,
    value: 6
  },
  sevenD: {
    name: `Seven of Diamonds`,
    value: 7
  },
  eightD: {
    name: `Eight of Diamonds`,
    value: 8
  },
  nineD: {
    name: `Nine of Diamonds`,
    value: 9
  },
  tenD: {
    name: `Ten of Diamonds`,
    value: 10
  },
  jackD: {
    name: `Jack of Diamonds`,
    value: 10
  },
  queenD: {
    name: `Queen of Diamonds`,
    value: 10
  },
  kingD: {
    name: `King of Diamonds`,
    value: 10
  }
}
let btnPlayer = document.getElementById(`player`)
let btnReset = document.getElementById(`reset`)
//////////////////////////////////////////////////

console.log(deck)

// let gamePlay = () => {
//   testP.drawCard()
//   testP.drawCard()

//   testD.drawCard()
//   testD.drawCard()
//   // compareChoice()
// }
// btnPlayer.addEventListener(`click`, () => {
//   testP.drawCard()
//   console.log(testP)
// })
// gamePlay()

// btnReset.addEventListener(`click`, () => {
//   location.reload()
// })
// let z = []
// for (let i = 0; i < testP.hand.length; i++) {
//   console.log(testP.hand)
//   const replaced = testP.hand[i].replace(/\D/g, '')
//   console.log(replaced)

//   let num

//   if (replaced !== '') {
//     num = Number(replaced)
//     z.push(num)
//   }
//   console.log(z)
//   // let results = z.reduce((x, y) => {
//   //   return x + y
//   // }, 0)

//   // console.log(results)
//   // if (results < 21) {
//   //   console.log(`hit or stand`)
//   // } else if (results === 21) {
//   //   console.log(`BlackJack`)
//   // } else {
//   //   console.log(`try again`)
//   // }
// }
