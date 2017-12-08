import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from the marvel api
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#dddddd'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Hunter Final Project')

    container.appendChild(title)

    let thorCard = new Card({
      title: 'Thor',
      image: '/images/thor-thumb.png',
      description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.',
      link: 'http://marvel.com/universe/Thor_(Thor_Odinson)#axzz502Le2EeS',
      linkText: 'More Info on Thor'
    })
    container.append(thorCard.getContent())

    let hulkCard = new Card({
      title: 'Hulk',
      image: '/images/hulk-thumb.png',
      description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.',
      link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz502Le2EeS',
      linkText: 'More Info on Hulk'
    })
    container.append(hulkCard.getContent()) 

      let spidermanCard = new Card({
      title: 'Spider-Man',
      image: '/images/spiderman-thumb.png',
      description: 'Peter Parker was bitten by a spider infecting him with the abilities of a spider. Now he runs around taking pictures of himself.',
      link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz502Le2EeS',
      linkText: 'More Info about this character'
    })
    container.append(spidermanCard.getContent()) 

       let ironmanCard = new Card({
      title: 'Iron-Man',
      image: '/images/ironman-thumb.jpg',
      description: 'Tony Stark, billionaire weapons manufacturer with an unforgettable narcissistic personality. If you can see past the sarcasm there is a human under that metal case.',
      link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz502Le2EeS',
      linkText: 'More Info about this character'
    })
    container.append(ironmanCard.getContent()) 





    return container
  }

  animate() {
  }
}
