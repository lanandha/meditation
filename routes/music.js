var express = require('express');
var router = express.Router();
var mongoose=require(mongoose);
var song =require('./models/Song');

mongoose.connect('mongodb://localhost/music');

router.get('/addsong',(req,res)=>{
song.find().exec((err, files) => {
   
 //     res.render('index', { files: files });
   res.send({files});
  });
});

module.exports = router;