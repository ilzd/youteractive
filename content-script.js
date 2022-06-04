const videoDiv = document.querySelector('.html5-video-container');
const videoElement = document.querySelector('.html5-video-container video');
const videoContainer = videoDiv.parentElement
const imageElement = document.createElement('img')

imageElement.style.display = 'none'
imageElement.style.position = 'relative'
imageElement.style.top = '25px'
imageElement.style.left = '25px'
imageElement.style.zIndex = 100

videoContainer.appendChild(imageElement)

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
    xi: 0.399,
    xf: 0.426,
    yi: 0.899,
    yf: 0.945,
    image: "https://i.imgur.com/mB4WSOZ.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.428,
    xf: 0.454,
    yi: 0.899,
    yf: 0.945,
    image: "https://i.imgur.com/jW9HS8x.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.456,
    xf: 0.482,
    yi: 0.899,
    yf: 0.945,
    image: "https://i.imgur.com/e59PQeV.png"
  },
  {
    startTime: 0,
    endTime: 700,
    xi: 0.486,
    xf: 0.511,
    yi: 0.899,
    yf: 0.945,
    image: "https://i.imgur.com/TZlYd90.png"
  }
]

videoContainer.addEventListener('mousemove', (event) => {
  const rect = videoContainer.getBoundingClientRect()
  const offsetX = (videoContainer.clientWidth - videoElement.clientWidth) / 2
  const offsetY = (videoContainer.clientHeight - videoElement.clientHeight) / 2
  const pointerX = (event.clientX - rect.left - offsetX) / videoElement.clientWidth
  const pointerY = (event.clientY - rect.top - offsetY) / videoElement.clientHeight
  let found = false
  for(let int of interactions) {
    if (!(videoElement.currentTime >= int.startTime) || !(videoElement.currentTime <= int.endTime)) continue
    if(!(pointerX >= int.xi) || !(pointerX <= int.xf)) continue
    if(!(pointerY >= int.yi) || !(pointerY <= int.yf)) continue
    imageElement.src = int.image
    found = true
    break
  }

  imageElement.style.display = found ? 'block' : 'none'
})