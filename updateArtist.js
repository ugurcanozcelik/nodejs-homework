const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
    module.exports.updateArtist = function(req,res){
        var artistId=req.params.id;
        connection.query('SELECT * FROM artist where artistId='+artistId, function(err, result) {
            if(err){
                console.log('Could not connect to dB');
                throw err;
            } 
            else {
                res.render('updateArtist',{artist:result});
            }
        });
    }
    
    module.exports.updateArtistPost = function(req,res){
        var artistId=req.params.id;
        var artistName=req.body.artistName;
        var doTheArtistLive=req.body.doTheArtistLive;
        var artistBirthDate=req.body.artistBirthDate;
        var sql = "UPDATE artist SET ArtistName='"+artistName+"',doTheArtistLive='"+doTheArtistLive+"',ArtistBirthDate='"+artistBirthDate+"'where ArtistId="+artistId;
        connection.query(sql, function (err, result) {
            if(err) {
                throw err;
            } 
            else {
                res.redirect('/listArtist')
            }   
        });    
    }