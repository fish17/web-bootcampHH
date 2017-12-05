import Card from '../component/card'

export default class Dashboard {
 constructor () {

 } 


  getData() {

} 

  getContent() {
    let container = document.createElement ('div')
    container.id = 'container'

    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.append('Jarvis Web Project') 

    container.appendChild(title)
    
    let ironmanCard = new Card({ 
      title: 'Ironman' 
    
    })  

    container.append(ironmnCard.getContent())

    return container
  }

  animate() {

  }

}

