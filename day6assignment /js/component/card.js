export default class Card {
  constructor(options) {
    this.options = options 
  } 
  getContent() {
    let card = document.createElement('div') 
      card.classList.add('col-6')
      card.style.height = '300px'
      card.style.margin = '1%'
      card.style.cursor = 'pointer'
      card.style.boxshadow = '0px 0px 3px #88888'
      card.style.borderWidth = '3px'
      card.style.borderstyle = 'none'
      card.style.bordercolor = 'blue'
      card.style.borderWidth = 'rgba(0, 0, 0, 0.4)'
      card.style.boxshadow = '0px 0px 3px #88888'
      card.style.borderRadius = '25px'

  let cardHeader = document.createElement('div')
  cardHeader.style.height = '10%'



  let cardTitle = document.createElement('div')
  cardTitle.append(this.options.Title)
  cardTitle.style.color = '#dddddd'
  cardTitle.style.margin = 'auto'
  cardTitle.style.textAlign = 'center'
  cardTitle.style.fontWeight = 'bold'
  cardTitle.style.fontSize = '24px'
  cardTitle.style.width = '100%'



  cardHeader.append(cardTitle)

  card.append(cardHeder) 

  return card

  }
} 
