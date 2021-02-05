const {app, BrowserWindow}  = require('electron');

//ventenas 
let mainWindow;
let providersMainWindow;
let stockMainWindow;
let customersMainWindow;

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

function createProvidesMainWindow() {

}

function createCustomersMainWindow(){

}

function createStockMainWindow(){
    
}
