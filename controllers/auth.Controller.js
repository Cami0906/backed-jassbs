
const { compareSync } = require('bcrypt');
require('dotenv').config({ path: 'config.env'})
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User');
const { findUserByUsername, registerUser, getOneUserById } = require('../services/auth.service');
const { generateToken } = require('../helpers/jwt.helper');


const register = async(req, res) => {

    try {
        let newUser = new UserModel(req.body)
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).send({error: 'Ha ocurrido algo'})
    }
}

const login = async(req, res) => {

    const {email, password, username} = req.body;
    const userFound = await findUserByUsername(username);  
    
    if(! userFound){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe. Por favor, regístrese.'
        });
    }
const validPassword = compareSync (password, userFound.password);
    if (! validPassword){
        return res.status(400).json({
            ok: false,
            msg: 'Contraseña inválida. Intente nuevamente'
        });
    }
	
this.generarToken()
const userData = userFound.toObject();
localStorage.setItem("User", userData)


     res.status(200).json({
        ok: true,
        token
     });
}

exports.generarToken = async (req, res ) => {
    const {email, password, username}  = req.body
    const User = await UserModel.findOne({ email })
    if (!User) {
        return res.status(401).json({ error: "Credenciales invalidas (correo) "})
    }
    if ( User.password != password) {
        return res.status(401).json({error: "Credenciales invalidas (clave) "})
    }

    const payload = {
        id: User._id,
        username: `${User.name} ${User.lastName}`
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, {expiresIn: '24h'})
    return res.status(202).json({ token })
}

const getUserById = async (req, res) => {
    const user_id = req.params.id

    try {
        const data = await getOneUserById(user_id)
        res.status(200).json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el usuario por id'
        })
    }
}
const renewToken = (req, res)=> {
    const userData = req.authUser; 
    const {id} = userData;

    delete userData.iat;
    delete userData.exp;

const userFound = UserModel.findById(id);
    if(! userFound){
        res.status(400).json({
            ok: false,
            msg: 'El usuario no existe; el token no se renovará.'
        });
    }

const newToken = generateToken ({...userData})
        res.status(200).json({
            ok:true,
            token: newToken,
            userData
        });
    }

module.exports = {
    login,
    register, 
    renewToken,
    getUserById
}
