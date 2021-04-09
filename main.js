const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    //Window properties
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  //opens devtools at startup
  win.webContents.openDevTools();
};

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
