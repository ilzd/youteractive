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
    xi: 0.3,
    xf: 0.7,
    yi: 0.9,
    yf: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1KelIuHTV21x-nzbc9TYupZBsxUUzvjHIIelHuXYiECjax-xM70t_UpCmP5pzraGxhE&usqp=CAU"
  }
]

videoContainer.addEventListener('mousemove', (event) => {
  let found = false
  for(let int of interactions) {
    if (!(videoElement.currentTime >= int.startTime) || !(videoElement.currentTime <= int.endTime)) continue
    const pointerX = event.clientX / videoContainer.clientWidth
    const pointerY = event.clientY / videoContainer.clientHeight
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