import React from 'react';
import soundFile from '../sountrack/Click.mp3';
import './menu.css';
import { Link } from 'react-router'
import Sound from 'react-sound';

import menuTheme from '../sountrack/01. Elder.mp3';


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
            <div className='menu'>
                <ul className='menuList'>
                    <li className='lis'><Link onClick={this.onClick} className='aLis' to='/game'>Jogar</Link></li>
                    <li className='lis'><Link onClick={this.onClick} className='aLis' to='/about'>Créditos</Link></li>
                    <li className='lis'><a onClick={this.onClick} className='aLis' href='#'>Sair</a></li>
                </ul>
                <audio ref={this.myref} src={menuTheme} autoPlay loop volume={0.1} />
            </div>
        )
    }
}