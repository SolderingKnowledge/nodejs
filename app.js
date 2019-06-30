const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('views')); //serves static files for whole appc
app.use(express.json()); //json
app.use(express.urlencoded({ extended: false })); //urlEncoded

var arr = [];
app.post('/arr', (req, res) => {
	const course = {
		name: arr.length + 1,
		id: req.body.name
	};
	arr.push(course);
	res.send(course);
});

app.get('/', (req, res) => {
	res.send(req.body);
});

app.post('/', (req, res) => {
	res.send(req.headers);
});

app.listen(3000, () => console.log('listening on port 3000'));
// nodemon app.js to run this app
