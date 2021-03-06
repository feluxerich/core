const { app, BrowserWindow, dialog } = require('electron');
const autoUpdater = require('electron-updater');

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    icon: __dirname + "/public/favicon.ico"
  });

  win.webContents.on('before-input-event', (event, input) => {
    if (input.key.toLowerCase() === 'escape') {
      var resp = dialog.showMessageBoxSync(win, {
        buttons: ['&Yes', '&No'],
        message: 'Do you want to quit?',
        noLink: true,
      });
      if (resp === 0) app.quit();
      event.preventDefault();
    }
  });

  win.loadURL('https://fluxi.me/');
};

app
  .whenReady()
  .then(() => {
    createWindow();
    autoUpdater.checkForUpdatesAndNotify();
  })
  .catch(console.log);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
