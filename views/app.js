let express = require('express'); //requiero express
const { dirname } = require('path');
let app = express(); 
const path = require('path')
const PORT = 3000;
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFIle(path.join(__dirname, "/views/index.html"))
}) 

app.get('/babbage', function(req, res) {
    res.sendFile(path.join(__dirname, "/babbage.html"))
})
app.get('/berners-lee', function(req, res) {
    res.sendFile(path.join(__dirname, "/berners-lee.html"))
})



//app.use(express.static(__dirname + '/public'));


