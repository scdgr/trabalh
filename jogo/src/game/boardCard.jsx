import React from 'react'
export default class BoardCard extends React.Component {
    render() {
        return (
            <div className='cards'>
                {this.props.item.nome}
            </div>
        )
    }
}