const express=require('express');
const app=express();
const path=require('path');
const index=require('./index');
var PORT = process.env.PORT || 1010;

const bodyParser  = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 
app.get('/',index.index);


//Artist
const listArtist=require('./listArtist');
const addArtist=require('./addArtist')
const updateArtist=require('./updateArtist')
const deleteArtist=require('./deleteArtist')

app.get('/listArtist',listArtist.listArtist);
app.get('/addArtist',addArtist.addArtist);
app.post('/addArtist',addArtist.addArtistPost);
app.post('/updateArtist/:id',updateArtist.updateArtistPost);
app.get('/updateArtist/:id',updateArtist.updateArtist);
app.get('/deleteArtist/:id',deleteArtist.deleteArtist);


//MusicType
const listMusicType=require('./listMusicType')
const addMusicType=require('./addMusicType')
const updateMusicType=require('./updateMusicType')
const deleteMusicType=require('./deleteMusicType')

app.get('/listMusicType',listMusicType.listMusicType);
app.get('/addMusicType',addMusicType.addMusicType);
app.post('/addMusicType',addMusicType.addMusicTypePost);
app.post('/updateMusicType/:id',updateMusicType.updateMusicTypePost);
app.get('/updateMusicType/:id',updateMusicType.updateMusicType);
app.get('/deleteMusicType/:id',deleteMusicType.deleteMusicType);

//Album
const listAlbum=require('./listAlbum');
const addAlbum=require('./addAlbum')
const updateAlbum=require('./updateAlbum')
const deleteAlbum=require('./deleteAlbum')
app.get('/listAlbum',listAlbum.listAlbum);
app.get('/addAlbum',addAlbum.addAlbum);
app.post('/addAlbum',addAlbum.addAlbumPost);
app.post('/updateAlbum/:id',updateAlbum.updateAlbumPost);
app.get('/updateAlbum/:id',updateAlbum.updateAlbum);
app.get('/deleteAlbum/:id',deleteAlbum.deleteAlbum);




app.listen(PORT,function(req,res){
    console.log('Service listening')
});