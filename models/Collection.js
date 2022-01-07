const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const collectionSchema = mongoose.Schema({
	name: String,
	version: String,
	mods: [{
		name: String,
		description: String,
		url: String
	}],
	comments: [
		ObjectId
	]
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;