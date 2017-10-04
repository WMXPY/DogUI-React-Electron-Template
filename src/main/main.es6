import electron, {
	app,
	BrowserWindow
} from 'electron';
import path from 'path';
import url from 'url';
const root = __dirname;
const isDev = false;
let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			webSecurity: false
		}
	});
	if (isDev) {
		mainWindow.loadURL('http://localhost:3000/');
	} else {
		const dialog = require('electron').dialog;
		console.log(dialog.showMessageBox({
			message: __dirname + '\\..\\renderer\\index.html'
		}));
		mainWindow.loadURL(__dirname + '\\..\\renderer\\index.html');
	}
	mainWindow.webContents.openDevTools();

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