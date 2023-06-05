const container = document.getElementById('almost')
const hoverDiv = document.getElementById('almost__hover')
if (container) {
  container.addEventListener('mousemove', function (e) {
    if (hoverDiv) {
      console.log('asd2')
      hoverDiv.style.top = e.clientY + 'px'
      hoverDiv.style.left = e.clientX + 'px'
    }
  })
}

export {}
