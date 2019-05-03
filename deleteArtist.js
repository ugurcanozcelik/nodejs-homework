const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
      
module.exports.deleteArtist = function(req,res){
    var artistId=req.params.id;
    connection.query('DELETE FROM artist where ArtistId='+artistId, function(err, result) {
        if(err){
            console.log('could not conenct to be db');
            throw err;
        } 
        else {
            res.redirect('/listArtist')
        }
    }); 
}
