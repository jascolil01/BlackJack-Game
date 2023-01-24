let deck = [
  (aceH = {
    name: `Ace of Hearts`,
    value: 1,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_a.png'
  }),
  (twoH = {
    name: `Two of Hearts`,
    value: 2,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_2.png'
  }),
  (threeH = {
    name: `Three of Hearts`,
    value: 3,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_3.png'
  }),
  (fourH = {
    name: `Four of Hearts`,
    value: 4,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_4.png'
  }),
  (fiveH = {
    name: `Five of Hearts`,
    value: 5,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_5.png'
  }),
  (sixH = {
    name: `Six of Hearts`,
    value: 6,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_6.png'
  }),
  (sevenH = {
    name: `Seven of Hearts`,
    value: 7,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_7.png'
  }),
  (eightH = {
    name: `Eight of Hearts`,
    value: 8,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_8.png'
  }),
  (nineH = {
    name: `Nine of Hearts`,
    value: 9,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_9.png'
  }),
  (tenH = {
    name: `Ten of Hearts`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_10.png'
  }),
  (jackH = {
    name: `Jack of Hearts`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_v.png'
  }),
  (queenH = {
    name: `Queen of Hearts`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_d.png'
  }),
  (kingH = {
    name: `King of Hearts`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/coeur_r.png'
  }),
  (aceS = {
    name: `Ace of Spade`,
    value: 1,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_a.png'
  }),
  (twoS = {
    name: `Two of Spade`,
    value: 2,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_2.png'
  }),
  (threeS = {
    name: `Three of Spade`,
    value: 3,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_3.png'
  }),
  (fourS = {
    name: `Four of Spade`,
    value: 4,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_4.png'
  }),
  (fiveS = {
    name: `Five of Spade`,
    value: 5,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_5.png'
  }),
  (sixS = {
    name: `Six of Spade`,
    value: 6,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_6.png'
  }),
  (sevenS = {
    name: `Seven of Spade`,
    value: 7,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_7.png'
  }),
  (eightS = {
    name: `Eight of Spade`,
    value: 8,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_8.png'
  }),
  (nineS = {
    name: `Nine of Spade`,
    value: 9,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_9.png'
  }),
  (tenS = {
    name: `Ten of Spade`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_10.png'
  }),
  (jackS = {
    name: `Jack of Spade`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_v.png'
  }),
  (queenS = {
    name: `Queen of Spade`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_d.png'
  }),
  (kingS = {
    name: `King of Spade`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/pique_r.png'
  }),
  (aceC = {
    name: `Ace of Club`,
    value: 1,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_a.png'
  }),
  (twoC = {
    name: `Two of Club`,
    value: 2,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_2.png'
  }),
  (threeC = {
    name: `Three of Club`,
    value: 3,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_3.png'
  }),
  (fourC = {
    name: `Four of Club`,
    value: 4,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_4.png'
  }),
  (fiveC = {
    name: `Five of Club`,
    value: 5,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_5.png'
  }),
  (sixC = {
    name: `Six of Club`,
    value: 6,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_6.png'
  }),
  (sevenC = {
    name: `Seven of Club`,
    value: 7,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_7.png'
  }),
  (eightC = {
    name: `Eight of Club`,
    value: 8,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_8.png'
  }),
  (nineC = {
    name: `Nine of Club`,
    value: 9,
    img: `https://www.dcode.fr/tools/playing-cards/images/trefle_9.png`
  }),
  (tenC = {
    name: `Ten of Club`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_10.png'
  }),
  (jackC = {
    name: `Jack of Club`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_v.png'
  }),
  (queenC = {
    name: `Queen of Club`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_d.png'
  }),
  (kingC = {
    name: `King of Club`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/trefle_r.png'
  }),
  (aceD = {
    name: `Ace of Diamonds`,
    value: 1,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_a.png'
  }),
  (twoD = {
    name: `Two of Diamonds`,
    value: 2,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_2.png'
  }),
  (threeD = {
    name: `Three of Diamonds`,
    value: 3,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_3.png'
  }),
  (fourD = {
    name: `Four of Diamonds`,
    value: 4,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_4.png'
  }),
  (fiveD = {
    name: `Five of Diamonds`,
    value: 5,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_5.png'
  }),
  (sixD = {
    name: `Six of Diamonds`,
    value: 6,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_6.png'
  }),
  (sevenD = {
    name: `Seven of Diamonds`,
    value: 7,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_7.png'
  }),
  (eightD = {
    name: `Eight of Diamonds`,
    value: 8,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_8.png'
  }),
  (nineD = {
    name: `Nine of Diamonds`,
    value: 9,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_9.png'
  }),
  (tenD = {
    name: `Ten of Diamonds`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_10.png'
  }),
  (jackD = {
    name: `Jack of Diamonds`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_v.png'
  }),
  (queenD = {
    name: `Queen of Diamonds`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_d.png'
  }),
  (kingD = {
    name: `King of Diamonds`,
    value: 10,
    img: 'https://www.dcode.fr/tools/playing-cards/images/carreau_r.png'
  })
]
let btnPlayer = document.getElementById(`player`)
let btnDealer = document.getElementById(`dealer`)
let btnReset = document
  .getElementById(`reset`)
  .addEventListener(`click`, () => {
    location.reload()
  })
let winner = document.getElementById(`winner`)
let loser = document.getElementById(`loser`)
let playerB = document.getElementById(`playerB`)
let dealerB = document.getElementById(`dealerB`)
let tie = document.getElementById(`tie`)
let playerCards = document.getElementById(`playerCards`)
let dealerCards = document.getElementById(`dealerCards`)
//////////////////////////////////////////////////

deck.sort((a, b) => 0.5 - Math.random())

let cardsPlayedP = []
let cardsPlayedD = []

drawCard = () => {
  let z = deck[0]
  addPic()
  cardsPlayedP.push(z)
  deck.shift()
  return deck
}

btnPlayer.addEventListener(`click`, () => {
  drawCard()

  compareChoiceP()
})
btnDealer.addEventListener(`click`, () => {
  btnPlayer.disabled = true
  btnDealer.disabled = true
  compareChoiceD()
  compareChoiceF()
})

compareChoiceP = () => {
  let newValue = []
  cardsPlayedP.forEach((value) => {
    newValue.push(value.value)
    return newValue
  })

  let finalSumP = newValue.reduce((x, y) => {
    return x + y
  }, 0)

  if (finalSumP > 21) {
    btnDealer.disabled = true
    btnPlayer.disabled = true
    loser.style.opacity = 1
  } else if (finalSumP === 21) {
    btnPlayer.disabled = true
    btnDealer.disabled = true
    playerB.style.opacity = 1
  }
  return finalSumP
}
compareChoiceD = () => {
  let newValue = []
  cardsPlayedD.forEach((value) => {
    newValue.push(value.value)
    return newValue
  })
  let finalSumD = newValue.reduce((x, y) => {
    return x + y
  }, 0)

  if (finalSumD > 21) {
    winner.style.opacity = 1
  } else if (finalSumD === 21) {
    dealerB.style.opacity = 1
  } else if (finalSumD < 17) {
    let y = deck[0]
    addPic()
    cardsPlayedD.push(y)
    deck.shift()
    compareChoiceD()
    console.log(cardsPlayedD)
  } else if (18 < finalSumD < 21) {
    return finalSumD
  }
}
addPic = () => {
  var img = new Image()
  img.src = deck[0].img
  playerCards.appendChild(img)
}
gamePlay = () => {
  let x = deck[0]
  addPic()
  cardsPlayedP.push(x)
  deck.shift()

  let y = deck[0]
  addPic()
  cardsPlayedD.push(y)
  deck.shift()

  let z = deck[0]
  addPic()
  cardsPlayedP.push(z)
  deck.shift()

  let a = deck[0]
  addPic()
  cardsPlayedD.push(a)
  deck.shift()

  compareChoiceP()
}

compareChoiceF = () => {
  console.log(compareChoiceD())
  console.log(compareChoiceP())
  if (compareChoiceD() < compareChoiceP() && compareChoiceP() < 21) {
    winner.style.opacity = 1
  } else if (compareChoiceD() > compareChoiceP() && compareChoiceD() < 21) {
    loser.style.opacity = 1
  } else if (compareChoiceD() === compareChoiceP()) {
    tie.style.opacity = 1
  }
}
gamePlay()
