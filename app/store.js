'use strict'
const Store = require('electron-store')

module.exports = new Store({
  defaults: {
    lastWindowState: {
      height: 768,
      width: 1024
    }
  }
})
