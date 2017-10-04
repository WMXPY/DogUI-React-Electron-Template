import os from 'os';
import {
    app
} from 'electron';

export default {
    isDevelopment: false,
    os: os.platform()
}

const menu = {
    window: {
        label: '窗口',
        role: 'window',
        submenu: [{
                label: '重新加载',
                accelerator: 'CmdOrCtrl+R',
                click: (item, focusedWindow) => {
                    if (focusedWindow)
                        focusedWindow.reload();
                }
            },
            {
                label: '全屏幕',
                accelerator: (function () {
                    if (os.platform() == 'darwin')
                        return 'Ctrl+Command+F';
                    else
                        return 'F11';
                })(),
                click: function (item, focusedWindow) {
                    if (focusedWindow)
                        focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                }
            }
        ]
    },
    aboutWin: {
        label: '关于',
        role: 'about',
        submenu: [{
            label: '重新加载',
            accelerator: 'CmdOrCtrl+R',
            click: (item, focusedWindow) => {
                if (focusedWindow)
                    focusedWindow.reload();
            }
        }]
    },
    about: {
        label: '关于',
        role: 'about',
        submenu: [{
            label: '重新加载',
            accelerator: 'CmdOrCtrl+R',
            click: (item, focusedWindow) => {
                if (focusedWindow)
                    focusedWindow.reload();
            }
        }, {
            label: '退出',
            accelerator: 'Command+Q',
            click: function () {
                app.quit();
            }
        }]
    }
}
let menuTemplate;
if (os.platform() === 'darwin') {
    menuTemplate = [menu.about, menu.window];
} else {
    menuTemplate = [menu.window, menu.aboutWin];
}

export {
    menuTemplate
}