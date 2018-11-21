import React from 'react';
import soundFile from '../sountrack/Click.mp3';
import './menu.css';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.audio = new Audio(soundFile);
    }
    onClick() {
        this.audio.play();
    }
    render() {
        return (
            <div>
                <ul className='menuList'>
                    <li className='lis'><a onClick={this.onClick} className='aLis' href='#/game'>Jogar</a></li>
                    <li className='lis'><a onClick={this.onClick} className='aLis' href='#/about'>Créditos</a></li>
                    <li className='lis'><a onClick={this.onClick} className='aLis' href='#'>Sair</a></li>
                    {/* {this.state.audioHidden ? null : <audio ref={this.myref} src={soundFile}  />} */}

                </ul>
            </div>
        )
    }
}