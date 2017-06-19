var express = require('express');
var router = express.Router();

/* GET home page. */

var person ={
	name: 'Swapnil',
	college: 'Amrit Campus',
	course: 'B.Sc.CSIT',
	semester: 'Fifth',
	number: '9860300861',
	link: 'https://www.facebook.com/swapnil.guragain',
	image: 'images/swapnil.jpg'
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', person });
});

router.get('/profile', function(req, res){
	res.render('profile', {title: 'Profile', person});
});

router.get('/add', function(req, res){
	res.render('add', {title: 'Add'});
});

router.get('/edit', function(req, res){
	res.render('edit', {title: 'Edit'});
});

module.exports = router;
