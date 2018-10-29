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
            cards: [],
            cardsToAdd: [],
        }
        this.deleteCard = this.deleteCard.bind(this);
    }
    componentDidMount() {
        /*this.setState(state => ({
            ...state,
            socket: io('http://localhost:9999')
        }));*/
        var socket = io('http://200.98.64.146:9999');
        socket.on('connect', () => {
            console.log('conectei coroi');
            this.setState(state => ({
                ...state,
                socket
            }))
        })
        socket.on('msg', msg => {
            console.log(msg);
            this.setState(state => ({
                ...state,
                cards: msg.player1.cards
            }))
        })
    }
    deleteCard(id) {
        console.log(this.state)
        this.state.socket.emit('delete_p1', id);
        console.log('emiti deleta')
    }
    render() {
        return (
            
            <div>
                <CardContainer color='#fff176' />
                <Board cards={this.state.cardsToAdd} />
                <CardContainer color='#aed581' cards={this.state.cards} deleteCard={this.deleteCard} />
            </div>
        )
    }
}