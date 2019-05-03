const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
      
module.exports.addArtist = function(req,res){
    res.render('addArtist');    
}
module.exports.addArtistPost = function(req,res) {
    var artistName=req.body.artistName;
    var doTheArtistLive=req.body.doTheArtistLive;
    var artistBirthDate=req.body.artistBirthDate;
    var sql = "INSERT INTO artist SET ArtistName='"+artistName+"',doTheArtistLive="+doTheArtistLive+",artistbirthdate='"+artistBirthDate+"'";
    connection.query(sql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/listArtist')
        }
    });    
}
