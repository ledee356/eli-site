var video = document.querySelector('.mania')
video.addEventListener('play', function() {
  video.play()
  video.classList.add('is-active')
})

video.addEventListener('pause', function() {
  video.pause()
  video.classList.remove('is-active')
})



var video1 = document.querySelector('.anxiety')
video1.addEventListener('play', function() {
  video1.play()
  video1.classList.add('is-active')
})

video1.addEventListener('pause', function() {
  video1.pause()
  video1.classList.remove('is-active')
})


var video2 = document.querySelector('.depression')
video2.addEventListener('play', function() {
  video2.play()
  video2.classList.add('is-active')
})

video2.addEventListener('pause', function() {
  video2.pause()
  video2.classList.remove('is-active')
})
