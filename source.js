window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')

let game = new Phaser.Game(640, 320, Phaser.AUTO)

let state = {
  preload: function () {

  },
  create: function () {

  },
  update: function () {

  }
}

game.state.add('state', state)

game.state.start('state')

console.log('Get Ready To Rumble!')
