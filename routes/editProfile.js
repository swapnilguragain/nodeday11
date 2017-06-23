var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Profile = require('../models/profiles');

router.get('/delete/:id', function(req, res){
	Profile.findOneAndRemove({_id: req.params.id}, function(err, doc){
		if (err) throw err;
		res.redirect('/');
	});
});

module.exports = router;
