const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 762,
    height: 765,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.focus();
}

const template = [
  //메뉴
  {
    label: "File",
    submenu: [
      {
        label: "Open",
        click: function () {
          //클릭하면 이동
          shell.openExternal("https://www.electron.org/docs/api");
        },
      },
      {
        type: "separator", //구분선
      },
      {
        role: "toggleDevTools", //개발자도구 열기
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
