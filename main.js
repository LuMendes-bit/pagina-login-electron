//Importando os módulos app e browserwindow do electron
const { app, BrowserWindow } = require('electron')

//Define a função createwindow que é responsavel cria uma nova janela do aplicativo electron
const createWindow = () => {
    //Criar um nova instâcia do BrowserWindow com as dimensões especificas
  const win = new BrowserWindow({
    width: 800,//Largura
    height: 600//altura
  })

  //Carregar o arquivo idex.html na janela criada
  win.loadFile('index.html')
}

//Quando o aplictivo estiver pronto, chama a fução createwindow paraa criar a ajanela principal
app.whenReady().then(() => {
    //Execua a função createwindow para criar a janela principal
  createWindow()
})