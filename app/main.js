const { app, BrowserWindow} = require("electron")

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width:700,
        height:720,
    })
    mainWindow.loadFile(__dirname + '/index.html')
})
app.allowRendererProcessReuse = true