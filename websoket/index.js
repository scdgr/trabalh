const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

let myObj = {
    player1: {
        cards: [{
                id: 1,
                nome: 'stalin'
            },
            {
                id: 2,
                nome: 'hitler'
            },
            {
                id: 3,
                nome: 'churchill'
            },
            {
                id: 4,
                nome: 'napoleão'
            }
        ]
    }
}


io.on('connection', socket => {
    socket.join('jogo');
    io.to('jogo').emit(JSON.stringify(myObj));
})

http.listen('9999', () => {
    console.log('listening on 9999')
})