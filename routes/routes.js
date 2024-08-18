const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const loginController = require('../controllers/loginController')
//router.post('/login', login);
//router.post('/register', register);
//router.get('/renew-token', authUser, renewToken);
//router.get('/user/:id', getUserById)


//--------------------Rutas Usuario--------------------------------
router.post('/register', userController.crearUsuario )
router.get('/buscar-user/:id', userController.obtenerUsuario )
router.get('/buscar-users', userController.obtenerUsuarios )
router.delete('/eliminar-user/:id', userController.eliminarUsuario )

//-------------------Ruta Login------------------------------------
router.post('/login', loginController.login )
module.exports = router;
