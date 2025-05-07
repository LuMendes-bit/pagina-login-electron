// Importando os módulos app e BrowserWindow do Electron
const { app, BrowserWindow } = require('electron')

// Define a função createWindow que é responsável cria uma nova janela do aplicativo Electron
const createWindow = () => {
  // Cria uma nova instância do BrowserWindow com as dimens~oes especificadas
  const win = new BrowserWindow({
    width: 800, // Define a largura da janela
    height: 600 // Define a altura da janela
  })

  // Carrega o arquivo index.html na janela criada
  win.loadFile("index.html")
}

// Quando o aplicativo estiver pronto, chama a função createWindow para criar a janela principal
app.whenReady().then(() => {
  // Executa a função createWindow para criar a janela principal
  createWindow()
})