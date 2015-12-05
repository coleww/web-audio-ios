module.exports = function (el, ac, cb) {
  function handleIOS() {
    var buffer = ac.createBuffer(1, 1, 22050)
    var source = ac.createBufferSource()
    source.buffer = buffer
    source.connect(ac.destination)
    source.noteOn(0)
    callNextTick()
    setTimeout(function() {
      cb(source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)
    }, 1)
    el.removeEventListener('touchstart', handleIOS, false)
  }
  el.addEventListener('touchstart', handleIOS, false)
}
