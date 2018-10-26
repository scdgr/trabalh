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
                marginTop: '5px',
                backgroundColor: this.props.color
            }}>
                {this.props.cards ? this.props.cards.map((item) => {
                    return (
                        <Card item={item} key={item.id} handleDrop={(id) => this.props.deleteCard(id)}/>
                    )
                }) : null}
            </div>
        )
    }
}


//