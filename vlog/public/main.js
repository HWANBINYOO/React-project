import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import url from "url";

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
  });
  win.loadFile("index.html");

  const template = [
    //메뉴
    {
      label: "File",
      submenu: [
        {
          label: "Open",
          click: function () {
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
}

app.on("ready", createWindow);
