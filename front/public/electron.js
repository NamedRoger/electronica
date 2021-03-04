const {BrowserWindow,app,ipcMain} = require('electron');
const url = require('url');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 800, minWidth: 950, maxHeight: 1400,
    webPreferences: {
      nodeIntegration:true,
      nodeIntegrationInSubFrames:true,
      nodeIntegrationInWorker:true,
      preload:'./preload.js',
      nativeWindowOpen:true
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' :  `file://${path.join(__dirname, "../build/index.html")}`);

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.title = `Electrónica`;
  //mainWindow.setMenu(null);
  mainWindow.maximize();
  mainWindow.on('close', () => {
    app.quit();
  });
  mainWindow.on('closed', () => mainWindow = null);
  
}

app.on('ready', createWindow);

ipcMain.on('proveedor:closeForm',(e,data) => {
  console.log(data);
});


app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});