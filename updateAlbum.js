const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);

module.exports.updateAlbum = function(req,res){
    var albumId=req.params.id;
    connection.query('SELECT * FROM album where AlbumId='+albumId, function(err, album) {
        if(err){
            console.log('could not connect to db');
            throw err;
        } 
        else {
            connection.query('SELECT * FROM artist', function(err, artist) {
                connection.query('SELECT * FROM musictype', function(err, musictype) {
                    res.render('updateAlbum',{album:album,musictype:musictype,artist:artist});    
                });
            });        }
    });
}
module.exports.updateAlbumPost = function(req,res){
    var albumId=req.params.id;
    var albumName=req.body.albumName;
    var artistName=req.body.artistName;
    var LaunchAlbum=req.body.LaunchAlbumtarihi;
    var musicType=req.body.musicType;
    var sql = "UPDATE album SET AlbumName='"+albumName+"',ArtistId='"+artistName+"',LaunchDate='"+LaunchAlbum+"',MusicTypeId='"+musicType+"' where AlbumId='"+albumId+"'";
    connection.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/listAlbum')
        }
    });    
}