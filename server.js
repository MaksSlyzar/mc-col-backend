const config = require("./config/config");
const mongoose = require("mongoose");
const express = require("express");
const collectionsAjax = require("./ajax/collections");
const notesRoute = require("./routes/notes");

//Models
const CollectionModel = require("./models/Collection");
const UserModel = require("./models/User");
const CommentModel = require("./models/Comment");

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
});

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/ajax', collectionsAjax);
app.use('/notes', notesRoute);

app.get('/', (req, res) => {
	console.log("asd")
	res.send("hello world");
})

const runServer = () => {
	app.listen(3000, console.log("Server started"));
}

const connectDb = () => {
	const options = {};

	mongoose.connect(`mongodb+srv://${config.mongodb.username}:${config.mongodb.password}@cluster0.s8atq.mongodb.net/Collection?retryWrites=true&w=majority`, options);

	return mongoose.connection;
}

connectDb()
	.on('error', console.log)
	.on('disconnected', connectDb)
	.once('open', runServer);
