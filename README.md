web-audio-ios
----------------

unlock web audio in ios/safari/whatever

an npm-ified version of [How to: Web Audio on iOS by Paul Bakaus](https://paulbakaus.com/tutorials/html5/web-audio-on-ios/)

[![NPM](https://nodei.co/npm/web-audio-ios.png)](https://nodei.co/npm/web-audio-ios/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

### EXAMPLE

var wai = require('web-audi-ios')
wai(document.body, yrAudioContext, function (unlocked) {
  console.log(unlocked, 'yay audio is unlocked now! do yr thing!')
  // if for some reason unlocked is false, then something strange has happened and u should handle that
})
