const { app, BrowserWindow, dialog } = require('electron');
const autoUpdater = require("electron-updater");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    closable: true,
    autoHideMenuBar: true,
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

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
