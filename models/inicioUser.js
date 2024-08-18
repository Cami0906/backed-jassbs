const { Schema, model } = require('mongoose');

const UserSchema = new Schema({	
	password: {
		type: String,
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
const UserModel = model('inicioUser', UserSchema);

module.exports = UserModel;
