const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
module.exports.index = function(req,res) {
    var artistSql = "select (SELECT count(*) from artist) as ArtistTotal,(SELECT count(*) from album) as AlbumTotal ,(SELECT count(*) from musictype) as MusicTypeTotal";
    connection.query(artistSql , function (err, result) {
        if(err) {
            throw err;
        } 
        else {
            res.render('index',{result:result});
        }
    });  

   
}   