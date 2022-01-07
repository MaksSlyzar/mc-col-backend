const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = mongoose.Schema({
	name: String,
	admin: Boolean,
	comments: [ ObjectId ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;