var wai = require('./')
window.AudioContext = window.AudioContext || window.webkitAudioContext
var ac = new AudioContext()

var osc = ac.createOscillator()
osc.frequency.value = 333
var g = ac.createGain()
g.gain.value = 0.4
osc.connect(g)
g.connect(ac.destination)



wai(window, ac, function (unlocked) {
  console.log('boop\'d yah')
  osc.start(ac.currentTime)
})

