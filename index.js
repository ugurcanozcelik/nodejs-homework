const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydb'
    });

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