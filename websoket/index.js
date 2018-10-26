const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})



io.on('connection', socket => {
    console.log('new connection', socket.id);
    socket.on('msg', (msg) => {
        console.log(msg);
        socket.broadcast.emit('msg', msg);
    })
})

http.listen('9999', () => {
    console.log('listening on 9999')
})