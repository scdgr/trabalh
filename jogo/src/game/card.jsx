import React from 'react';
import { DragSource } from 'react-dnd';


const cardSource = {
    beginDrag(props) {
        return props.item;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.item.id)
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Card extends React.Component {
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        return connectDragSource(
            <div className='cards'>
                {this.props.item.nome}
            </div>
        )
    }
}

export default DragSource('card', cardSource, collect)(Card);