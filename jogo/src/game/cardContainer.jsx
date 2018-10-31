import React from 'react';
import { DragSource } from 'react-dnd';
import Card from './card'

export default class CardContainer extends React.Component {
    constructor(props) {
        super();
    }
    deleteItem(id) {
        console.log(id);
    }

    render() {

        return (
            <div style={{
                height: '150px',
                width: '470px',
                backgroundColor: this.props.color
            }}>
                {console.log(this.props.players)}
                {this.props.player1 ?
                    this.props.players ? this.props.players.player1.cards.map((item) => {
                        return (
                            <Card item={item} key={item.id} handleDrop={(id) => this.props.deleteCard(id)} />
                        )
                    }) : null
                    : null}
            </div>
        )
    }
}


//