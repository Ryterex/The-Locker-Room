const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));

app.post("/post", (req, res) => {

	res.send("Name: " + req.body.name + " Email: " + req.body.email + " Age: " + req.body.age);
});

app.listen(8080, () => {
	console.log("Server running at http://localhost:8080/");
});