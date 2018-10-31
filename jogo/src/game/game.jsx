import React from 'react'
import './game.css'
import Board from './board'
import CardContainer from './cardContainer'
import io from 'socket.io-client'

import { cards } from './cards';
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            asdasd: 'asdasdasd'
        }
        this.deleteCard = this.deleteCard.bind(this);
        this.renderPlayer = this.renderPlayer.bind(this);
    }
    componentDidMount() {
        /*this.setState(state => ({
            ...state,
            socket: io('http://localhost:9999')
        }));*/
        var socket = io('http://localhost:9999');

        socket.on('connect', () => {
            console.log('conectei');
        })
        socket.on('msg', msg => {
            console.log(msg);
            this.setState(state => ({
                ...state,
                socket,
                players: msg
            }))
        })
    }
    deleteCard(id) {
        // console.log(this.state)
        this.state.socket.emit('delete_p1', id);
        console.log('emiti deleta')
    }
    renderPlayer() {
        if(!this.state.socket) return null;
        if (this.state.players.player1.socketId === this.state.socket.id) {
            return (<div>
                <CardContainer color='#fff176' />
                <Board players={this.state.players} player1={true} />
                <CardContainer color='#aed581' players={this.state.players} player1={true} deleteCard={this.deleteCard} />
            </div>)
        } else if (this.state.players.player2.socketId === this.state.socket.id) {
            return (<div>
                <CardContainer color='#fff176' />
                <Board players={this.state.players} player1={false} />
                <CardContainer color='#aed581' players={this.state.players} player1={false} deleteCard={this.deleteCard} />
            </div>)
        } else {
            return null;
        }
    }
    render() {
        console.log(this.state)
        return (
            this.renderPlayer()
        )
    }
}