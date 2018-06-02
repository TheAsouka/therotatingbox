const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu, ipcMain} = electron;

// Set ENV
//process.env.NODE_ENV = 'production';

let mainWindow;

app.on("ready", function(){
    //Create new window
    mainWindow = new BrowserWindow({});

    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol: "file:",
        slashes: true
    }));

    //Quit all the apps when closed
    mainWindow.on("close", function(){
        app.quit();
    });
    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

//Create menu template
const mainMenuTemplate = [
    {
        label:'File'
    }
];

//add developer tools if not in prod
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: "Toggle DevTools",
                accelerator: process.platform == 'darwin' ? "Command+I" : "Ctrl+I",
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}

