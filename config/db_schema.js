var mongoose		= require('mongoose'),
	Schema 			= mongoose.Schema;

var entrySchema = new Schema({
	entry_date : Date,
	amount : Number,
	paid : Boolean,
	user:{ type : Schema.Types.ObjectId, ref :'User' },
	type : String
});


var userSchema  = new Schema({
	first_name : String,
	last_name : String,
	username :  String,
	position : String,
	picture_path: String
});

var mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(mongoConnectionString);

exports.Entry = mongoose.model('Entries', entrySchema);
exports.User = mongoose.model('User', userSchema);
exports.dbConnection = mongoose.connection;


