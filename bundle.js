(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./":2}],2:[function(require,module,exports){
module.exports = function (el, ac, cb) {
  function handleIOS(e) {
    console.log(e)
    var buffer = ac.createBuffer(1, 1, 22050)
    var source = ac.createBufferSource()
    source.buffer = buffer
    source.connect(ac.destination)
    source.start(ac.currentTime)
    setTimeout(function() {
      cb(source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)
    }, 1)
    el.removeEventListener('mousedown', handleIOS, false)
  }
  el.addEventListener('mousedown', handleIOS, false)

}

},{}]},{},[1]);
