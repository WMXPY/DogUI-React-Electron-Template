import electron, {
	app,
	dialog,
	Menu,
	MenuItem,
	BrowserWindow
} from 'electron';
import path from 'path';
import url from 'url';
import config, {
	menuTemplate
} from './config/config';
import icon from './config/icons';
const log = function (string) {
	dialog.showMessageBox({
		message: string
	});
}
const root = __dirname;
let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1440,
		height: 900,
		icon: icon.favicon
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