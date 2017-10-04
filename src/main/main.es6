import electron, {
	app,
	dialog,
	BrowserWindow
} from 'electron';
import path from 'path';
import url from 'url';
const log = function (string) {
	dialog.showMessageBox({
		message: string
	});
}
const root = __dirname;
const isDev = false;
let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	if (isDev) {
		mainWindow.loadURL('http://localhost:3000/');
	} else {
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