const {app, BrowserWindow}  = require('electron');
const path = require('path');
const {urlFiles} = require('../src/consts');

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

    mainWindow.loadURL(`${urlFiles}/index.html`);

   mainWindow.on('close', () => {
        app.quit();
    });

    /*app.on('window-all-closed', ()=>{
        if(process.platform === 'darwin'){
            app.quit();
        }
    });

   app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            crearVentanaPrincipal();
        }
    });*/
});

function createProvidesMainWindow() {

}

function createCustomersMainWindow(){

}

function createStockMainWindow(){

}
