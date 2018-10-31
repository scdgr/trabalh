import React from 'react'
import { DropTarget } from 'react-dnd'
import BoardCard from './boardcard'
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}
class Targert extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        return connectDropTarget(
            <div className='jogavel' style={{
                height: '225px',
                width: '470px',
                backgroundColor: this.props.player1 ? '#3949ab' : '#ef5350',
            }}>
                {this.props.cardsToShow ? this.props.cardsToShow.map((item, id) => {
                    return (
                        <BoardCard item={item} key={id} />
                    )
                }) : null}
            </div>
        )
    }
}


export default DropTarget('card', {}, collect)(Targert);