import React from 'react'
import BoardCard from './boardcard'
export default class OpoCards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='jogavel' style={{
                height: '225px',
                width: '470px',
                backgroundColor: this.props.player1 ? '#ef5350' : '#3949ab',
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