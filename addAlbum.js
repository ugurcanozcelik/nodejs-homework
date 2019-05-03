const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);

module.exports.addAlbum = function(req,res){
    connection.query('SELECT * FROM artist', function(err, artist) {
        connection.query('SELECT * FROM musictype', function(err, musictype) {
            res.render('addAlbum',{musictype:musictype,artist:artist});    
        });
    });
    
}   

module.exports.addAlbumPost = function(req,res) {
    var albumName=req.body.albumName;
    var artistName=req.body.artistName;
    var LaunchAlbum=req.body.LaunchAlbum;
    var musicType=req.body.musicType;
    var sql = "INSERT INTO album SET AlbumName='"+albumName+"',ArtistId='"+artistName+"',LaunchDate='"+LaunchAlbum+"',MusicTypeId='"+musicType+"'";
    connection.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/listAlbum')
        }
    });    
}