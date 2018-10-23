import React from 'react'
import './game.css'

export default class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='tabuleiro' /> 
                <div className='cartas' />
            </div>
        )
    }
}