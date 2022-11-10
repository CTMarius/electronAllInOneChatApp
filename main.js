const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

async function createWindow() {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webviewTag: true
    }
  })

  await win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.whenReady().then(() => {
  createWindow()
})