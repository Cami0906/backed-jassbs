const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

	username: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	lastName: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true
	},
	phone: {
		type: Number,
		require: true
	},

	email: {
		type: String,
		require: true
	},

},
	{
		timestamps: true
	}
);
const UserModel = model('User', UserSchema);

module.exports = UserModel;
  //{
//	"name": "Carlos",
//	"username": "Carlos",
//	"lastName": "Martinez",
//	"password": "clave",
//	"phone": 3007777888,
//	  "email": "carlos1111@gmail.com"
 // }
