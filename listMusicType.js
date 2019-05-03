const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
      
module.exports.listMusicType = function(req,res){
    connection.query('SELECT * FROM musictype', function(err, result) {
        if(err){
            console.log('could not to connect db');
            throw err;
        } 
        else {
            res.render('listMusicType',{musictype: result});
        }
    });
}  
