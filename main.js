const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Keep a global reference to prevent garbage collection
let mainWindow;

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      contextIsolation: false, // Changed to false to allow webview integration
      enableRemoteModule: false,
      webSecurity: false,
      sandbox: false // Add this to ensure webview works properly
    },
    // Add window customization
    title: 'All-In-One Chat App',
    icon: path.join(__dirname, 'assets/icon.png'),
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#ffffff'
  });

  // Add this to handle webview permissions
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    callback(true);
  });

  try {
    await mainWindow.loadFile('index.html');
    
    // Open DevTools in development
    if (process.env.NODE_ENV === 'development') {
      mainWindow.webContents.openDevTools();
    }
  } catch (error) {
    console.error('Failed to load app:', error);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

// App event handlers
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Handle errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});