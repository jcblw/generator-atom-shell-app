/* global require, __dirname, process */
(function () {
    'use strict';

    var app = require('app'),
        BrowserWindow = require('browser-window');

    // reports crashes to github
    require('crash-reporter');

    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
        app.quit();
    });

    // When app is ready to run...
    app.on( 'ready', function ( ) {
        var mainWindow = new BrowserWindow({
          width : 200,
          height : 400
        });

        mainWindow.loadUrl('file://' + __dirname + '/index.html');

        mainWindow.on( 'closed', function ( ) {
            mainWindow = null;
        });
    });
}());
