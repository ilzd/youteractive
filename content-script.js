const videoDiv = document.querySelector('.html5-video-container');
const videoElement = document.querySelector('.html5-video-container video');
const videoContainer = videoDiv.parentElement
const imageElement = document.createElement('img')

console.log(videoContainer)

imageElement.style.display = 'none'
imageElement.style.position = 'fixed'
imageElement.style.top = '100px'
imageElement.style.left = '100px'

document.body.appendChild(imageElement)

const interactions = [
  {
    startTime: 0,
    endTime: 700,
    xi: 0.374,
    xf: 0.392,
    yi: 0.905,
    yf: 0.937,
    image: "https://i.imgur.com/GFk0ND9.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.474,
    xf: 0.392,
    yi: 0.905,
    yf: 0.937,
    image: "https://i.imgur.com/mB4WSOZ.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.574,
    xf: 0.392,
    yi: 0.905,
    yf: 0.937,
    image: "https://i.imgur.com/jW9HS8x.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.674,
    xf: 0.392,
    yi: 0.905,
    yf: 0.937,
    image: "https://i.imgur.com/e59PQeV.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.774,
    xf: 0.392,
    yi: 0.905,
    yf: 0.937,
    image: "https://i.imgur.com/TZlYd90.png"
  }
]

videoContainer.addEventListener('mousemove', (event) => {
  let found = false
  for(let int of interactions) {
    if (!(videoElement.currentTime >= int.startTime) || !(videoElement.currentTime <= int.endTime)) continue
    const pointerX = event.clientX / videoContainer.clientWidth
    const pointerY = event.clientY / videoContainer.clientHeight
    console.log(pointerX, pointerY)
    if(!(pointerX >= int.xi) || !(pointerX <= int.xf)) continue
    if(!(pointerY >= int.yi) || !(pointerY <= int.yf)) continue
    imageElement.src = int.image
    found = true
    break
  }
  if(found) {
    imageElement.style.display = 'block'
  } else {
    imageElement.style.display = 'none'
  }
})