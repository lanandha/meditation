var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
    id:Number,
    url:String,
    title:String,
    artist:String,
    artwork:String,
    duration:Number
});

module.exports = mongoose.model('Song',SongSchema);