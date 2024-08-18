require('dotenv').config({ path: 'config.env'})
const usuariosModel = require('../models/User')

exports.login= async (req, res ) => {
    const {email, password}  = req.body
    const usuario = await usuariosModel.findOne({ email })
    if (!usuario) {
        return res.status(401).json({ error: "Credenciales invalidas (correo) "})
    }
    if ( usuario.password != password) {
        return res.status(401).json({error: "Credenciales invalidas (clave) "})
    }
	console.log('ingresaste');
	return res.status(202).json({ usuario })
	
	
}
