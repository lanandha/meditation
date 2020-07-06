var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:String,
    password:String

/* favorites : [
        {
            type: Schema.Types.ObjectId,
            ref: "Song"
        }
    ],
    playlists : [
        {
            type: Schema.Types.ObjectId,
            ref: "Playlist"
        }
    ]*/
});

module.exports = mongoose.model('User',userSchema);