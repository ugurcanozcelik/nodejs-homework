const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);

module.exports.addMusicType = function(req,res){
    res.render('addMusicType');    
}
module.exports.addMusicTypePost = function(req,res) {
    var musicType=req.body.musicType;
    var musicSql = "INSERT INTO musictype SET MusicType='"+musicType+"'";
    connection.query(musicSql, function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.redirect('/listMusicType')
        }
    });    
}
