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
        { console.log(hovered) }
        return connectDropTarget(
            <div className='jogavel' style={{
                height: '225px',
                width: '470px',
                backgroundColor: '#3949ab',
            }}>
                {this.props.cardsToShow ? this.props.cardsToShow.map((item, id) => {
                    console.log(item);
                    return (
                        <BoardCard item={item} key={id} />
                    )
                }) : null}
            </div>
        )
    }
}


export default DropTarget('card', {}, collect)(Targert);