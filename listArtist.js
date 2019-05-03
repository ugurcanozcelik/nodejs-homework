const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);

module.exports.listArtist = function(req,res){
    connection.query('SELECT * FROM artist', function(err, result) {
        if(err){
            console.log('Could not connect to dB');
            throw err;
        } 
        else {
            res.render('listArtist',{artist: result});
        }
    });
} 