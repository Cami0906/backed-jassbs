const mongoose = require('mongoose')
require('dotenv').config({path: 'config.env'});

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO)
        console.log('base de datos inicializada correctamente');
    } catch (error) {
        console.error(error)
        throw new Error ('error al inicializar la base de datos')
    }
}

module.exports = dbConection

