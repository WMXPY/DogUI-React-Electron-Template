import os from 'os';

export default {
    isDevelopment: false,
    os: os.platform()
}

const menu = {
    main: {
        label: '窗口',
        role: 'window',
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
        }]
    }
}
let menuTemplate;
if (os.platform() === 'darwin') {
    menuTemplate = [menu.about, menu.main];
} else {
    menuTemplate = [menu.main, menu.about];
}

export {
    menuTemplate
}