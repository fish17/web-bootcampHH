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
    title.style.marginTop = '30px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Hunter Final Project')

    container.appendChild(title)

    let aqueductCard = new Card({
      title: 'Aqueduct',
      image: '/images/aqueduct-thumb.jpg',
      description: 'Peter Van Zante who was injured during military engagements was shipped back to the US in a container which was supposed to save his life. However, lightning struck the ship which was carrying Peter. Peter is well now and has some interesting powers.',
      link: 'http://marvel.com/universe/Aqueduct?utm_campaign=apiRef&utm_source=dcc178363b548b2edf8fd1efd697faae',
      linkText: 'More Info on this character'
    })
    container.append(aqueductCard.getContent())

    let arcadeCard = new Card({
      title: 'Arcade',
      image: '/images/Arcade-thumb.jpeg',
      description: 'Arcade is one of the most mysterious villains in this fictional world. He is known for his art of being an assassin however, no one really knows who Arcade is or what his true background is. Arcade is a master at deception and his true roots are unknown.',
      link: 'http://marvel.com/universe/Arcade?utm_campaign=apiRef&utm_source=dcc178363b548b2edf8fd1efd697faae',
      linkText: 'More Info on this character'
    })
    container.append(arcadeCard.getContent()) 

      let antmanCard = new Card({
      title: 'Ant-Man',
      image: '/images/antman-thumb.jpg',
      description: 'Smart criminal turned good? Eric O Grady was an electrical engineer when unforeseen circumstances caused him to turn to a life of crime. However, stumbling upon the Ant-Man suit allowed him to decrease size and increase strength. Will he use it for good?',
      link: 'http://marvel.com/universe/Ant-Man_(Eric_O%27Grady)?utm_campaign=apiRef&utm_source=dcc178363b548b2edf8fd1efd697faae',
      linkText: 'More Info about this character'
    })
    container.append(antmanCard.getContent()) 

      let apocalypseCard = new Card({
      title: 'Apocalypse',
      image: '/images/Apocalypse-thumb.jpg',
      description: 'Alien supervillain who can disguise himself as any human being. He is a master of alien weapons and of his own body on a cellular level. Can he be defeated?',
      link: 'http://marvel.com/universe/Apocalypse_(En_Sabah_Nur)?utm_campaign=apiRef&utm_source=dcc178363b548b2edf8fd1efd697faae',
      linkText: 'More Info about this character'
    })
    container.append(apocalypseCard.getContent()) 





    return container
  }

  animate() {
  }
}
