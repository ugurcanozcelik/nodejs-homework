const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
    module.exports.updateMusicType = function(req,res){
        var musicTypeId=req.params.id;
        connection.query("SELECT * FROM musictype where MusicTypeId='"+musicTypeId+"'", function(err, result) {
            if(err){
                console.log('could not connect to db');
                throw err;
            } 
            else {
                res.render('updateMusicType',{musictype: result});
            }
        });
    }
    
      
    module.exports.updateMusicTypePost = function(req,res){
        var musictypeId=req.params.id;
        var musicType=req.body.musicType;
        var musicSql = "UPDATE musictype SET MusicType='"+musicType+"' where MusicTypeId='"+musictypeId+"'";
        connection.query(musicSql, function (err, result) {
            if(err) {
                throw err;
            } 
            else {
                res.redirect('/listMusicType')
            }
        });    
    }