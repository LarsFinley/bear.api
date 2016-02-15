var express = require('express');
var app = express();

var monte = {name: 'monte', id: 0, age: 15, gender: 'male'};
var ferdinand = {name: 'ferdinand', id: 1, age: 11, gender: 'male'};
var suzy = {name: 'suzy', id: 2, age: 13, gender: 'female'}
var murino = {name: 'murino', id: 3, age: 32, gender: 'female'}

var bears = [monte, ferdinand, suzy, murino];




app.get('/api/bears', function(req, res){
	res.json(bears)
});


app.listen(3000, function(){
	console.log('the server is up and running...')


});