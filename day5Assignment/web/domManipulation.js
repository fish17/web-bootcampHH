//This is the Goal: <p>This is Geralds paragraph.</p>
//Create a h1 tag and append to the dom that you are sending to your server
let paragraph = document.createElement('p')
paragraph.innerHTML = 'This is a javascript generated paragraph tag'

let heading = document.createElement('h1')
heading.innerHTML = 'this is a javascript generated heading tag'

let body = document.getElementById('content')

let head = document.getElementById('content')

body.append(paragraph)

head.append(heading) 

