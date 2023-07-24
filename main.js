var c=[
	{
	id:1,
	name:"pen",
	price:10,
	img:"images/1.jpg",
	},
	{
	id:2,
	name:"pen",
	price:20,
	img:"images/2.jpg",
	},
	{
	id:3,
	name:"pen",
	price:50,
	img:"images/3.jpg",
	},
	{
	id:4,
	name:"pencil",
	price:2,
	img:"images/p1.jpg",
	},
	{
	id:5,
	name:"pencil",
	price:5,
	img:"images/p2.png",
	}

]

var output=c.map(function(e){
	return e.price*10;
})
console.log(output);