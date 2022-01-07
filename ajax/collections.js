const express = require("express");
const jsonParser = express.json();

const router = express.Router();

router.get("/collections/get", (req, res) => {
	//TODO: 
	console.log("GET COLLECTIONS")
	res.json(['1', '2', '3']);
});

router.post("/collections/new", jsonParser, (req, res) => {
	console.log(request.body);
});

module.exports = router;