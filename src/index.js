const {app, BrowserWindow}  = require('electron');

//ventenas 
let mainWindow;

app.on('ready',() => {
    mainWindow = new BrowserWindow({
        width:800,
        height:800,
        webPreferences:{
            nodeIntegration:true,
            nodeIntegrationInSubFrames:true,
            devTools:true
        }
    });

    mainWindow.loadURL();
});
