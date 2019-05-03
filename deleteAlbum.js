const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);

module.exports.deleteAlbum = function(req,res){
    var albumId=req.params.id;
    connection.query('DELETE FROM album where AlbumId='+albumId, function(err, result) {
        if(err){
            console.log('could not connect to db');
            throw err;
        } 
        else {
            res.redirect('/listAlbum')
        }
    }); 
}
