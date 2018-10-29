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
        ],
        cardsOnBoard: []
    }
}


io.on('connection', socket => {
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
})

http.listen('9999', () => {
    console.log('listening on 9999')
})