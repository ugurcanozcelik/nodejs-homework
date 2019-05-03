const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
module.exports.listAlbum = function(req,res){
    connection.query('SELECT * FROM album,artist,musictype where artist.artistId=album.artistId and album.musictypeId=musictype.musictypeId', function(err, result) {
        if(err){
            console.log('could not connect to db');
            throw err;
        } 
        else {
            res.render('listAlbum',{album: result,connection:connection});
        }
    });
}