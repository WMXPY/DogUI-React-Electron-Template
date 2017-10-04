import electron, {
	app,
	dialog,
	Menu,
	MenuItem,
	BrowserWindow
} from 'electron';
import path from 'path';
import url from 'url';
import config from './config/config';
const log = function (string) {
	dialog.showMessageBox({
		message: string
	});
}
const root = __dirname;
const menuTemplate = [{
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
}];
let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
	if (config.isDevelopment) {
		mainWindow.loadURL('http://localhost:3000/');
		mainWindow.webContents.openDevTools();
	} else {
		let fileURL;
		fileURL = 'file://' + __dirname + '/../renderer/index.html';
		mainWindow.loadURL(fileURL);
	}
	mainWindow.on('closed', function () {
		mainWindow = null;
	})
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
})