import React from 'react'
import './game.css'

class Cavalo extends React.Component {
    render() {
        return (
            <span>♘</span>
        );
    }
}

class Gamse extends React.Component {
    render() {
        const { black } = this.props;
        const fill = black ? 'black' : 'white';
        const stroke = black ? 'white' : 'black';

        return (
            <div style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }}>
                {this.props.children}
            </div>
        );
    }
}

Square.propTypes = {
    black: PropTypes.bool
};

export default class Game extends React.Component {
    render() {
        return (
            <Gamse black>
                <Cavalo />
            </Gamse>
        )
    }
}