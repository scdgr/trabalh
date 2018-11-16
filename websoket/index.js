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

var rooms = [
];

class Player {
    /**
     * @param {int} number 
     * @param {Deck} deck 
     * @param {SocketIO.Socket} socket 
     */
    constructor(number, deck, socket, roomName) {
        roomName = roomName ? roomName : undefined;
        this.number = number;
        this.deck = deck;
        this.socket = socket;
        this.roomName = roomName;
    }
}

class Room {
    /**
     * @param {string} name 
     * @param {Player} player1 
     */
    constructor(name, player1) {
        this.name = name;

        this.player1 = player1;
        this.player1.socket.join(this.name);
        this.player1.roomName = this.name;
        /*
        this.player2 = player2;
        this.player2.socket.join(name);
        this.player2.roomName = this.name;*/
    }
}

io.on('connection', socket => {
    socket.emit('connect', null);

    socket.on('seeRooms', () => {
        socket.emit('allRooms', rooms);
    })

    socket.on('createRoom', (roomName, deck) => {
        console.log('teve algo');
        let player = new Player(1, deck, socket)
        let room = new Room(roomName, player)
        rooms.concat(room);
        socket.emit('allRooms', rooms);
    })
})


// io.on('connection', socket => {
//     if(!myObj.player1.socketId) myObj.player1.socketId = socket.id;
//     else if (!myObj.player2.socketId) myObj.player2.socketId = socket.id;
//     socket.join('jogo');
//     io.to('jogo').emit('msg', myObj);
//     /*io.in('jogo').on('cartaJogada', carta => {
//         myObj.player1.cards.findIndex(item => item.id === carta.id);
//     })*/
//     socket.in('jogo').on('delete_p1', id => {
//         var index = myObj.player1.cards.findIndex(item => item.id === id);
//         myObj.player1.cardsOnBoard.push(myObj.player1.cards.splice(index, 1)[0]);
//         io.to('jogo').emit('msg', myObj);
//         console.log('emiti');
//     })
//     socket.on('disconnect', () => {
//         if(socket.id === myObj.player1.socketId) myObj.player1.socketId = null;
//         else if (socket.id === myObj.player2.socketId) myObj.player2.socketId = null;
//     })
// })


http.listen('9999', () => {
    console.log('listening on 9999')
})