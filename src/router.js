const { Router } = require("express")
const rotas = Router()

const multer = require('multer')
const upload = require('./config/multer')


const UserController = require('./app/controllers/UserController')
const LoginController = require('./app/controllers/LoginController')
const ProdutosController = require('./app/controllers/produtosController')
const altenticacao = require('./app/middleware/autenticacao').autenticacao

rotas.post('/user', UserController.store)

rotas.post('/login', LoginController.store)

rotas.use(altenticacao)

rotas.post('/produtos', upload.single('file') ,ProdutosController.store)
rotas.get('/produtos',ProdutosController.index)

module.exports = rotas 