const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

const createWindow = () => {
  const win = new BrowserWindow({
    //Window properties
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      //will sanitize JS code
      worldSafeExecuteJavaScript: true,
      //ensures both preload and electron internal logic run in seperate context
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");

  //opens devtools at startup
  isDev && win.webContents.openDevTools();
};

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  //Closes app when you close windows on non-mac OS
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  //reopens with window
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//Webpack -> bundler for JS files
//Babel -> Compiles JS into JS compatible with all browsers
