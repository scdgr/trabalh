const electron = require('electron');
const { app, BrowserWindow } = require('electron');


var win = null;
function createWindow() {
    
    win = new BrowserWindow({
        width: 1360,
        height: 768,
        frame: false,
        resizable: false,
    })

    win.loadURL('file://'+ __dirname + '/public/index.html');


    win.on('closed', () => {
        win = null;
    })
}
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required')
app.on('ready', createWindow);


app.on('window-all-closed', () => {
    app.quit();
})