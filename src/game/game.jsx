import React from 'react'
import './game.css'
import Board from './board'
import CardContainer from './cardContainer'


import { cards } from './cards';
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: cards,
            cardsToAdd: []
        }
        this.deleteCard = this.deleteCard.bind(this);
    }
    deleteCard(id) {
        this.setState(prevState => {
            var index = prevState.cards.findIndex(item => item.id === id);
            prevState.cardsToAdd.push(prevState.cards.splice(index, 1)[0]);
            return { ...prevState }
        })
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