// GET DOM Element
const quote = document.querySelector('#quote')

const baseURL = 'https://api.quotable.io/random'
// GET QUOTES

async function getapi() {
  let response = await fetch(baseURL)
  let data = await response.json()
  quote.innerHTML = data.content
      //font size control
  
      if ( data.content.length >= 140 ) {
        txtQuote.style.fontSize = '1.9rem'
      } else {
        txtQuote.style.fontSize = '2.2rem'
      }

      if ( document.body.clientWidth <= 680 ) {
        txtQuote.style.fontSize = '1.5rem'
      }
}
getapi()


let quoteBoxColor = document.querySelector('.quotes-card')
let buttonColor = document.getElementById('btn-quote')
let bgColor = document.getElementsByTagName('body')[0]
let txtQuote = document.getElementById('quote') 
let diceColor = document.querySelector('.dice-img')
let activeColor = ''

// RANDOM COLOR
const getRandomColor = () => {

  const colors = [
    { bg: 'rgba(253, 213, 74, 0.3)', btn: 'rgba(253, 213, 74, 0.8)', box: 'rgb(253, 213, 74)', txt: '#000' },
    { bg: 'rgba(174, 3, 3, 0.3)', btn: 'rgba(174, 3, 3, 0.8)', box: 'rgb(174, 3, 3)', txt: '#fff' },
    { bg: 'rgba(45, 44, 113, 0.3)', btn: 'rgba(45, 44, 113, 0.8)', box: 'rgb(45, 44, 113)', txt: '#fff' },
    { bg: 'rgba(47, 186, 119, 0.3)', btn: 'rgba(47, 186, 119, 0.8)', box: 'rgb(47, 186, 119)', txt: '#fff' },
    { bg: 'rgba(116, 177, 204, 0.3)', btn: 'rgba(116, 177, 204, 0.8)', box: 'rgb(116, 177, 204)', txt: '#000' },
    { bg: 'rgba(241, 164, 49, 0.3)', btn: 'rgba(241, 164, 49, 0.8)', box: 'rgb(241, 164, 49)', txt: '#000' },
    { bg: 'rgba(170, 35, 116, 0.3)', btn: 'rgba(170, 35, 116, 0.8)', box: 'rgb(170, 35, 116)', txt: '#fff' },
    { bg: 'rgba(14, 128, 121, 0.3)', btn: 'rgba(14, 128, 121, 0.8)', box: 'rgb(14, 128, 121)', txt: '#fff' }
  ]


  let randomNumber = Math.floor(Math.random() * colors.length)
  let randomElement = colors[randomNumber]
  //console.log(randomElement)
  return randomElement
}

const applyColor = () => {
  
  let randomColor = getRandomColor()
  //console.log(randomColor)

  //aplying colors
  if ( checkLastColor( randomColor ) ) {
    quoteBoxColor.style.backgroundColor = randomColor.box
    buttonColor.style.backgroundColor = randomColor.btn
    buttonColor.style.color = randomColor.txt
    bgColor.style.backgroundColor = randomColor.bg
    txtQuote.style.color = randomColor.txt

    //Filter to change the svg color - dice
    if ( randomColor.txt === '#fff' ) {
      //color: white
      diceColor.style.filter = 'invert(100%) sepia(8%) saturate(453%) hue-rotate(356deg) brightness(112%) contrast(100%)'
    } else {
      //color: black
      diceColor.style.filter = 'invert(0%) sepia(3%) saturate(9%) hue-rotate(79deg) brightness(85%) contrast(100%)'
    }
    
    activeColor = randomColor

    getapi()
  }
  else {
    applyColor()
  }
}

const checkLastColor = (color) => {
  console.log( color, activeColor )

  return color.bg !== activeColor.bg ? true : false
}

applyColor()

let eventTarget = document.getElementById('btn-quote')
eventTarget.addEventListener('click', applyColor)

