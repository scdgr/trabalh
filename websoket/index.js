const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
var player = 0;
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
        ],
        cardsOnBoard: [],
        socketId: null
    },
    player2: {
        cards: [],
        cardsOnBoard: [],
        socketId: null
    }
}


io.on('connection', socket => {
    if(!myObj.player1.socketId) myObj.player1.socketId = socket.id;
    else if (!myObj.player2.socketId) myObj.player2.socketId = socket.id;
    socket.join('jogo');
    io.to('jogo').emit('msg', myObj);
    /*io.in('jogo').on('cartaJogada', carta => {
        myObj.player1.cards.findIndex(item => item.id === carta.id);
    })*/
    socket.in('jogo').on('delete_p1', id => {
        var index = myObj.player1.cards.findIndex(item => item.id === id);
        myObj.player1.cardsOnBoard.push(myObj.player1.cards.splice(index, 1)[0]);
        io.to('jogo').emit('msg', myObj);
        console.log('emiti');
    })
    socket.on('disconnect', () => {
        if(socket.id === myObj.player1.socketId) myObj.player1.socketId = null;
        else if (socket.id === myObj.player2.socketId) myObj.player2.socketId = null;
    })
})


http.listen('9999', () => {
    console.log('listening on 9999')
})