import React from 'react';
import soundFile from '../sountrack/Click.mp3';
import './menu.css';
import { Link } from 'react-router'
import menuTheme from '../sountrack/01. Elder.mp3';



const { app } = window.require('electron').remote;
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.audio = new Audio(soundFile);
    }
    componentDidMount() {
        let audio = new Audio(menuTheme);
        audio.play();
        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        })
        audio.volume = 0.5;

        this.setState(state => ({
            ...state,
            menuAudio: audio,
        }))
    }
    handlePageChange() {
        this.state.menuAudio.pause();
    }
    handleExit() {
        app.quit();
    }
    onClick() {
        this.audio.play();
    }
    render() {
        return (
            <div className='menu'>
                <ul className='menuList'>
                    <li className='lis'><Link onClick={() => {this.onClick(); this.handlePageChange()}} className='aLis' to='/game'>Jogar</Link></li>
                    <li className='lis'><Link onClick={() => {this.onClick(); this.handlePageChange()}} className='aLis' to='/about'>Créditos</Link></li>
                    <li className='lis'><a onClick={() => {this.onClick(); this.handleExit()}} className='aLis' href='#'>Sair</a></li>
                </ul>
            </div>
        )
    }
}