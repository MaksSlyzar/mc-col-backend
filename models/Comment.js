const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const commentSchema = mongoose.Schema({
	userId: ObjectId,
	text: String,
	collectionId: ObjectId
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;