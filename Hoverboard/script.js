const container = document.getElementById('container')
const colors = ['#474CF4', '#BB47F4', '#EB47F4', '#F447A9', '#F44779', '#47B8F4', '#47F4DC', '#47F49A', '#EBF447', '#F4A347']
const SQUARES = 1280

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 30px ${color}, 0 0 50px ${color}`
}

function removeColor(element) {
   element.style.background = '#000000'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}