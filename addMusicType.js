const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydb'
    });
      
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
