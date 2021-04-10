const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notificationAPI: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
});

// window.sendNotification = (message) => {
//   ipcRenderer.send("notify", message);
// };
