import React from 'react'
import io from 'socket.io-client'



export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            roomInput: ''
        }

        this.handleRoomInputTextChange = this.handleRoomInputTextChange.bind(this);
        this.handleRoomCreate = this.handleRoomCreate.bind(this);
    }
    componentWillMount() {
        if (this.state.socket) return;
        this.setState(state => ({
            ...state,
            socket: io('http://localhost:9999')
        }))
    }
    componentDidMount() {
        console.log('kajsdjkas');

        this.state.socket.on('connect', () => {
            console.log('conectou');
            this.state.socket.emit('seeRooms');
        })

        this.state.socket.on('allRooms', rooms => {
            console.log('isso foi');
            this.setState(state => ({
                ...state,
                rooms,
            }))
        })
    }
    handleRoomInputTextChange(e) {
        e.persist();
        this.setState(state => ({
            ...state,
            roomInput: e.target.value
        }))
    }
    handleRoomCreate() {
        console.log(this.state);
        var roomName = this.state.roomInput;
        this.setState(state => ({
            ...state,
            roomInput: '',
        }))
        this.state.socket.emit('createRoom', roomName, null);


    }

    render() {
        return (
            <div>
                <div style={{
                    backgroundColor: '#eee',
                    width: '400px',
                    height: '400px'
                }}>
                    Salas criadas:
                <ul>
                        {this.state.rooms.map((room, id) => {

                            return (<li key={id}>
                                {room.name}
                            </li>)
                        })}
                    </ul>
                </div>
                <div style={{
                    backgroundColor: '#dedede',
                    width: '400px',
                    height: '400px'
                }}>
                    Criar sala: <input type={'texte'} value={this.state.roomInput} onChange={this.handleRoomInputTextChange} />
                    <button onClick={this.handleRoomCreate}>criar</button>

                </div>
            </div>
        )
    }
}