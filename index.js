module.exports = function (el, ac, cb) {
  function handleIOS(e) {
    var buffer = ac.createBuffer(1, 1, 22050)
    var source = ac.createBufferSource()
    source.buffer = buffer
    source.connect(ac.destination)
    source.start(ac.currentTime)
    setTimeout(function() {
      el.removeEventListener('mousedown', handleIOS, false)
      el.removeEventListener('touchend', handleIOS, false)
      cb(source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)
    }, 1)
  }
  el.addEventListener('mousedown', handleIOS, false)
  el.addEventListener('touchend', handleIOS, false)
}
