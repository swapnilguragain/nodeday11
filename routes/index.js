var express = require('express');
var router = express.Router();
// var Profile = require('../models/profiles.js');

/* GET home page. */

const Profile = require('../models/profiles');

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
	Profile.getProfiles(function(err, profiles){
		if (err) throw err; 
		res.render('index', { title: 'WLiT Bootcamp 2017', profiles });
	});
});

router.get('/profile', function(req, res){
	Profile.getProfiles(function(err, profiles){
		if (err) throw err; 
		res.render('profile', {title: 'Profile', profiles});
	});
});

router.get('/add', function(req, res){
	res.render('add', {title: 'Add'});
});

router.get('/edit', function(req, res){
	Profile.getProfiles(function(err, profiles){
		if (err) throw err; 
		res.render('edit', {title: 'Edit', profiles});
	});
});

router.get('/edit/:id', function(req, res){
	Profile.findOne({_id: req.params.id}, function(err, profile){
		res.render('edit', {title: 'Edit', profile});
		if (err) throw err;
	});
});

module.exports = router;
