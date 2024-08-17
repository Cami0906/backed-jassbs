const mongoose = require('mongoose')
const inventrioSchema = mongoose.Schema(
	{
		imagen: {
			type: String,
			required: true
		},
		producto: {
			type: String,
			required: true
		},
		cantidad:{
			type: String,
			required: true
		}
	},{
		timestamps: true,
		versionKey: false,
	}
)

module.exports = mongoose.model ('inventario',inventrioSchema)
