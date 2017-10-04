import electron, {
	app,
	BrowserWindow
} from 'electron';
import path from 'path';
import url from 'url';
const root = __dirname;
const isDev = true;
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	console.log(root);
	// mainWindow.loadURL(url.format({
	//   pathname: path.join(root, 'index.html'),
	//   protocol: 'file:', 
	//   slashes: true
	// }))
	if (isDev) {
		mainWindow.loadURL('http://localhost:3000/');
	} else {
		mainWindow.loadURL('../renderer/index.html');
	}
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function () {
		mainWindow = null;
	})
}

app.on('ready', createWindow);

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