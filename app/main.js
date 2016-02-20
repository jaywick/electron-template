'use strict';

let app = require('app');
let BrowserWindow = require('browser-window');
let mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 1200, height: 900 });
    mainWindow.loadURL('file://' + __dirname + '/shell.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});