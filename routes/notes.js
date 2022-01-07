const express = require("express");
const fs = require("fs");

const jsonParser = express.json();

const router = express.Router();

router.get("/view", (req, res) => {
	const data = JSON.parse(fs.readFileSync("./routes/Notes.json", 'utf-8'));

	res.render('main', { title: 'Greetings from Pug', data: data });
});

module.exports = router;