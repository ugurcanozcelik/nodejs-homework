const mysql = require('mysql');
var Mysql = require('./dbConfig');
var connection = mysql.createConnection(Mysql.config);
      
module.exports.deleteMusicType = function(req,res){
    var musictypeId=req.params.id;
    connection.query('DELETE FROM musictype where musictypeid='+musictypeId, function(err, result) {
        if(err){
            console.log('could not  connect to db');
            throw err;
        } 
        else {
            res.redirect('/listMusicType')
        }
    }); 
}
