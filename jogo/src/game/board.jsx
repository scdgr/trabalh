import React from 'react';
import Target from './target'



class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cards: []
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <div className='adversario' style={{
                    height: '225px',
                    width: '470px',
                    backgroundColor: '#ef5350',
                    marginTop: '5px',
                }} />
                <Target cardsToShow={this.props.cards} />
            </div>
        )
    }

}


export default Board;