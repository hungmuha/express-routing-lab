var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies=[
	{id:1,
	 name:"Chewing Gum",
	 color:"red"},
	{id:2,
	 name:"Pez",
	 color:"Green"},
	{id:3,
	 name:"Marshmallow",
	 color:"Pink"},
	{id:4,
	 name:"Candy Stick",
	 color:"Blue"}
];


//What would need to go into candies
//in order to pass our first test?
router.get('/', function(req,res) {

	res.json(candies);
	
});

router.get('/:id', function(req,res) {

	res.json(candies[req.params.id-1]);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

router.post('/', function(req,res) {
	//candies.push({id: 5, name:"Jelly Belly",color:"Orange"});
	candies.push(req.body);
	console.log(req.body);
	//res.json(candies[4]);
	res.send("Candy is now posted");
	
});


router.put('/:id', function(req,res) {
	var current= candies[req.params.id-1];
	current.name=req.body.name;
	current.color=req.body.color;

	res.send("changed");
	
});

router.delete('/:id',function(req,res){
	candies[req.params.id-1] = null;
	console.log(candies[req.params.id-1]);
	
	res.send("deleted");
})

// Fill out the rest of the routes here

module.exports = router;