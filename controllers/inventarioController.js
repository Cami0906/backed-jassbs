const inventarioModel = require('../models/inventario')

exports.crearInventario = async(req,res) => {
	console.log(req.body);
	try {
		let inventarioData;
		inventarioData = new inventarioModel (req.body)
		await inventarioData.save()
		res.send(inventarioData)
	} catch (error) {
		console.log(error);
		res.status(500).send('no se pudo crear')
	}
}

exports.traerInventario = async (req,res) => {
	try {
		const inventarioData = await inventarioModel.find()
		res.json(inventarioData)
	} catch (error) {
		console.log(error);
		res.status(404).send('no se encontro nada en la pagina')
	}
}

exports.modificarInventario = async (req,res) => {
	try {
		const {imagen,producto,cantidad} = req.body
		let inventarioData = await inventarioModel.findById(req.params.id)

		if (!inventarioData) {
			res.status(500).send({msg:'no se encontro el producto'})
		} else {
			inventarioData.imagen = imagen;
			inventarioData.producto = producto;
			inventarioData.cantidad = cantidad;

			await inventarioModel.findByIdAndUpdate(req.params,id, inventarioData)
			res.status(202).send('se actualizo la informacion')
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('no se pudo hacer el cambio')
	}
}

exports.eliminarInventario = async (req,res) => {
	try {
		let inventarioData = await inventarioModel.findById(req.params.id)
		if (!inventarioData) {
			res.status(404).send({msg:'no se encontro'})
		} else {
			await inventarioModel.findByIdAndDelete(req.params.id)
			res.status(202).send('se elimino el item')
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('hubo un problema')
	}
}

