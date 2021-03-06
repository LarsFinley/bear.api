var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'monte', id: 0, age: 15, gender: 'male'};
var ferdinand = {name: 'ferdinand', id: 1, age: 11, gender: 'male'};
var suzy = {name: 'suzy', id: 2, age: 13, gender: 'female'}
var murino = {name: 'murino', id: 2, age: 22, gender: 'female'}


var bears = [monte, ferdinand, suzy, murino];

app.get('/api/bears', function(req, res){
	res.json(bears)
});

app.get('/api/bear/:id', function(req, res){
	var id = Number(req.params.id);

	console.log(id)

var careBear = {title:"No bear with that ID"}

	
	bears.forEach(function(lookingBear){
		if(lookingBear.id === id){
			careBear = lookingBear;
		}
	});
		res.json(careBear);
});

app.delete('/api/bear/:id', function(req, res){
	var id = Number(req.params.id);
	var deleteBear = '';

	bears.forEach(function(bear){
		if(bear.id === id){
		deleteBear = bear;
		var index = bears.indexOf(deleteBear);	
			bears.splice(index, 1);
		}
	});
	res.json(deleteBear);
})


app.post('/api/bear', function(req, res){
	var newBear = {};

	console.log('about to create a new bear')

	newBear.name = req.body.name;
	newBear.age = req.body.age;
	newBear.gender = req.body.gender;
	newBear.id = new Date().getTime();

	console.log('pushing', newBear);

	bears.push(newBear);

	res.json(bears);

});

app.listen(3000, function(){
	console.log('the server is up and running...')
});