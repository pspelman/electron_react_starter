// Modules
const {app, BrowserWindow, ipcMain, TouchBar} = require('electron')
const windowStateKeeper = require('electron-window-state')

const appMenu = require('./desktop/menu.js')
const touchBar = require("./desktop/touchbar")

// APP UPDATES
const updater = require('./desktop/updater.js')
const path = require("path");

const isDev = !app.isPackaged // if this is true, we are in production, else in dev

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// DevTools button
const tbDevTools = new TouchBar.TouchBarButton({
  label: 'DevTools',
  icon: `${__dirname}/file-code-solid@2x.png`,
  iconPosition: 'left',
  click: () => mainWindow.webContents.toggleDevTools(),}
)

// create the main electron window
function createWindow() {
  // Check for app updates after 3 seconds
  setTimeout(updater, 3000)

  let state = windowStateKeeper({
    defaultWidth: 500, defaultHeight: 650,
  })

  mainWindow = new BrowserWindow({
    x: state.x, y: state.y,
    width: state.width, height: state.height,
    minWidth: 350, maxWidth: 900,
    minHeight: 300,
    // backgroundColor: 'white',
    backgroundColor: '#0595DE',
    webPreferences: {
      // nodeIntegration: true,
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'desktop', 'preload.js')}
  })

  // create the app menu
  appMenu(mainWindow)

  // add the touchbar functionality
  if (process.platform === 'darwin') mainWindow.setTouchBar(touchBar(mainWindow))


  state.manage(mainWindow)

  // load the compiled frontend
  mainWindow.loadFile('./frontend/index.html')

  if (isDev) mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => mainWindow = null)

}

app.whenReady().then(() => {

  createWindow()
  // const notification = new Notification({title: 'Welcome', body: 'You\'re online'})
  // notification.on('click', e => {
  //   mainWindow.focus()
  // })
  // notification.show()
});


ipcMain.handle('desktop-path', e=> {
  console.log(`someone asked for the path to the desktop --> forget about it`, )
  return "forget about it"
})

// Add MAC exit listener
// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
    return
  }
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

