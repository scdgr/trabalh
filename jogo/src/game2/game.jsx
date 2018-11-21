import React from 'react'
import io from 'socket.io-client'
import Sound from 'react-sound';

import abyssLich from '../sountrack/02. Abyssal Lich.mp3';
import shaper from '../sountrack/02. Shapers Realm.mp3';
import stillLive from '../sountrack/Still Alive.mp3';



const perguntas = [
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 3,
        locke: 3,
        voltaire: [3, 5],
        montesquieu: [1, 3, 5],
        maquiavel: [1, 4, 5],
        rousseau: [1, 5]
    }
]


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            scoreIncrement: 150,
            multiplier: 1,
            multiplierIncrement: 1.25,
            certas: [],
            erradas: [],
            currentSong: 0,
        }
        this.handleFinishPlaying = this.handleFinishPlaying.bind(this);
        this.setTrue = this.setTrue.bind(this);
    }
    handleFinishPlaying() {
        this.setState(state => ({
            ...state,
            currentSong: state.currentSong < 2 ? state.currentSong + 1 : 0,
            songStatus: true
        }))
        console.log(Sound);
        this.forceUpdate();
    }
    setTrue() {
        this.setState(state => ({
            ...state, 
            currentSong: state.currentSong < 2 ? state.currentSong + 1 : 0,
            // songStatus: !state.songStatus
        }))

    }

    componentDidMount() {
        var stillAlive = new Audio(stillLive);
        var shaperr = new Audio(shaper);
        var abyss = new Audio(abyssLich);
        shaperr.volume = 0.5;
        stillAlive.volume = 0.5;
        abyss.volume = 0.5;
        shaperr.play();
        stillAlive.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            abyss.play();
        })
        abyss.addEventListener('ended', function() {
            this.currentTime = 0;
            this.pause();
            shaperr.play();
        })
        shaperr.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            stillAlive.play();
        })
    }
    render() {
        return (
            <div className='jogo'>
                asdflkafkl
                <div className='perguntas'>
                    adsfadsf
                </div>
                <button onClick={this.setTrue} />
                {/* {this.state.songStatus ? (<Sound url={this.state.songs[this.state.currentSong]}
                    playStatus={Sound.status.PLAYING}
                    onFinishedPlayin={this.handleFinishPlaying}
                    volume={50}
                />) : null} */}
            </div>
        )
    }
}