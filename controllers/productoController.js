const productoModel = require ('../models/producto')

exports.crearProducto = async (req,res) => {
	console.log(req.body);
	try {
		let productoData;
        productoData = new productoModel (req.body)
		await productoData.save();
		res.send(productoData)
	} catch (error) {
		console.log(error);
		res.status(500).send('Error en la creacion del producto')
	}
}

exports.obtenerProductos = async (req,res) => {
	try {
		const productoData = await productoModel.find()
		res.json(productoData)
	} catch (error) {
		res.status(404).send('No se encontro ningun producto')
	}
}

exports.obtenerProducto = async (req,res) => {
	try {
		const productoData = await productoModel.findById(req.params.id)
		if (!productoData) {
			res.status(404).send({msg:'producto no encontrado'})
		} else {
			res.status(202).send(productoData)
		}
	} catch (error) {
		console.log(error);
		res.status(404).send('hubo un error')
	}
}

exports.modificarProducto = async (req,res) => {
	try {
		const {imagen,producto,precio} = req.body
		let productoData = await productoModel.findById(req.params.id)

		if (!productoData) {
			res.status(500).send({msg:'no se encontro el producto'})
		} else {
			productoData.imagen = imagen;
			productoData.producto = producto;
			productoData.precio = precio;

			await productoModel.findByIdAndUpdate(req.params,id, productoData)
			res.status(202).send('se actualizo la informacion')
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('no se pudo hacer el cambio')
	}
}

exports.eliminarProducto = async (req,res) => {
	try {
		let productoData = await productoModel.findById(req.params.id)
		console.log('productoData',productoData);
		if (!productoData) {
			res.status(404).send({msg:'no se encontro el producto'})
		} else {
			await productoModel.findByIdAndDelete(req.params.id)
			res.status(202).send('producto encontrado y eliminad')
		}
	} catch (error) {
		console.log(error);
		res.status(500).send('no se pudo eliminar el producto')
	}
}
