const express = require('express'); //requiero express
const app = express(); 
const PORT = 3030;
const path = require('path')


app.get('/', (req, res) => {
    res.sendFIle(path.join(__dirname, "/views/index.html"))
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
})
app.get('/berners-lee', (req, res)  => {
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
})


app.listen(PORT, () => console.log(`Servidor levantado en el puerto${PORT}
http://localhost:${PORT}`))

//app.use(express.static(__dirname + '/public'));


