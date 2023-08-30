var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var handlebars = require('handlebars');

router.get("/handlebars.js", function(req, res) {
  //var photo_comments = _.where(comments, { photo_id: +req.query.photo_id });
  res.sendFile(__dirname + '/node_modules/handlebars/dist/handlebars.js');
  //res.json(photo_comments);
});

module.exports = router;

