const { app, BrowserWindow } = require('electron/main');

const createWindow = () => {
    const win = new BrowserWindow({ width: 1080, height: 720 });

    win.setMenu(null);
    win.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { app.quit(); });
