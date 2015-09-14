var app = require('app')
var BrowserWindows = require('browser-window')
var ipc = require('ipc')

require('electron-debug')();

app.on('ready', function() {
    var mainWindow = new BrowserWindows({
      windth: 800,
      height: 600
    })
    mainWindow.loadUrl("file://" + __dirname + '/index.html')

    var prefsWindow = new BrowserWindows({
      width: 400,
      height: 400,
      show: false
    })
    prefsWindow.loadUrl("file://" + __dirname + '/prefs.html')

    ipc.on('toggle-prefs', function () {
      if (prefsWindow.isVisible())
        prefsWindow.hide()
      else
        prefsWindow.show()
    })
})
