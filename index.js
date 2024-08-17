const express = require ('express');
const dbConection = require ('./config/db')
const cors = require("cors")

const app = express()
dbConection()
app.use(cors())
app.use(express.json());

app.use('/api/facturacion',require('./routes/auth.routes'))

app.listen(3000, () =>{
    console.log('el servidor esta arriba');
})
