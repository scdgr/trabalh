import React from 'react';
import Target from './target'
import OpoCards from './opoCards'


class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cards: []
        }
    }
    render() {
        return (
            <div className='container'>
                {/*<div className='adversario' style={{
                    height: '225px',
                    width: '470px',
                    backgroundColor: this.props.player1 ? '#ef5350' : '#3949ab',
                }} />*/}
                <OpoCards player1={this.props.player1}
                    cardsToShow={this.props.player1 ? this.props.players.player2.cardsOnBoard : this.props.players.player1.cardsOnBoard}
                />
                <Target player1={this.props.player1}
                    cardsToShow={this.props.player1 ? this.props.players.player1.cardsOnBoard : this.props.players.player2.cardsOnBoard}
                />
            </div>
        )
    }

}


export default Board;