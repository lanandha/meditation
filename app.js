var express = require('express');

var song =require('./models/Song');

var app = express();

var mongoose=require('mongoose');
//var song =require('./models/Song');

mongoose.connect('mongodb://localhost/music');

app.get('/meditation',(req,res)=>{
song.find().exec((err, files) => {
   
 //     res.render('index', { files: files });
   res.send(files);
  });
});
//app.use('/music',musicRouter);
app.listen(3000,()=>{
	console.log("server start");
});