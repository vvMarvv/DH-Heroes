let express = require('express'); //requiero express
let app = express(); 
const PORT = 3030;
const path = require('path')


app.get('/', function(req, res) {
    res.sendFIle(path.join(__dirname, "/views/index.html"))
}) 

app.get('/babbage', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
})
app.get('/berners-lee', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
})


app.listen(PORT, () => console.log(`Servidor levantado en el puerto${PORT}
http://localhost:${PORT}
`))

//app.use(express.static(__dirname + '/public'));


