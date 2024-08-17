const mongoose = require('mongoose')
const productoSchema = mongoose.Schema(
	{
		imagen: {
			type: String,
			required: true
		},
		producto: {
			type: String,
			required: true
		},
		precio:{
			type: String,
			required: true
		},
	},{
		timestamps: true,
		versionKey: false,
	}
)


module.exports = mongoose.model("producto",productoSchema)
