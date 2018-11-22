import React from 'react'


import './game.css'


import soundFile from '../sountrack/Click.mp3';
import abyssLich from '../sountrack/02. Abyssal Lich.mp3';
import shaper from '../sountrack/02. Shapers Realm.mp3';
import stillLive from '../sountrack/Still Alive.mp3';
import ascent from '../sountrack/02. The Ascent.mp3';
import control from '../sountrack/03. The Control Blocks.mp3';
import aqueduct from '../sountrack/01. The Aqueduct.mp3';


import maquiavel from './images/maquiavel.jpg';
import voltaire from './images/voltaire.jpg';
import rousseau from './images/rousseau.jpg';
import locke from './images/locke.jpg';
import montesquieu from './images/montesquieu.jpg';

import usedMaquiavel from './images/maquiavel_used.jpg';
import usedVoltaire from './images/voltaire_used.jpg';
import usedRousseau from './images/rousseau_used.jpg';
import usedLocke from './images/locke_used.jpg';
import usedMontesquieu from './images/montesquieu_used.jpg';


import perguntas from './perguntasArray'

const { app } = window.require('electron').remote;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        var currentQuestion = perguntas.splice(Math.floor(Math.random * perguntas.length + 1), 1)[0];
        this.audio = new Audio(soundFile);
        this.state = {
            currentNumber: 1,
            score: 0,
            currentQuestion: currentQuestion,
            scoreIncrement: 150,
            multiplier: 1,
            multiplierIncrement: 1.25,
            gameOver: false,
            filosofos: [
                {
                    nome: 'Voltaire',
                    canUse: true,
                    corretas: currentQuestion.voltaire,
                    img: voltaire,
                    used: usedVoltaire
                }, {
                    nome: 'John Locke',
                    canUse: true,
                    corretas: currentQuestion.locke,
                    img: locke,
                    used: usedLocke
                }, {
                    nome: 'Montesquieu',
                    canUse: true,
                    corretas: currentQuestion.montesquieu,
                    img: montesquieu,
                    used: usedMontesquieu
                }, {
                    nome: 'Rousseau',
                    canUse: true,
                    erradas: currentQuestion.rousseau,
                    img: rousseau,
                    used: usedRousseau
                }, {
                    nome: 'Maquiavel',
                    canUse: true,
                    erradas: currentQuestion.maquiavel,
                    img: maquiavel,
                    used: usedMaquiavel
                }
            ]
        }
        this.setEndGame = this.setEndGame.bind(this);
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
        this.voltaireClick = this.voltaireClick.bind(this);
        this.lockeClick = this.lockeClick.bind(this);
        this.montesClick = this.montesClick.bind(this);
        this.rouClick = this.rouClick.bind(this);
        this.maqClick = this.maqClick.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }
    setEndGame(win) {
        console.log(this.state);
        this.state.shaperr.pause();
        this.state.stillAlive.pause();
        this.state.abyss.pause();
        this.state.theAque.pause();
        this.state.theAscn.pause();
        this.state.blocks.pause();
        this.setState(state => ({
            ...state,
            gameOver: true,
            win: win
        }))
    }

    handleQuestionClick(index) {
        // console.log(index);
        this.audio.play();
        if (index === this.state.currentQuestion.correto) {
            // console.log('acertou');
            if (perguntas.length > 0) {
                this.setState(state => ({
                    currentNumber: state.currentNumber + 1,
                    score: state.score + (state.scoreIncrement * state.multiplier),
                    multiplier: state.multiplier * state.multiplierIncrement,
                    currentQuestion: perguntas.shift(),
                }))
            } else {
                this.setState(state => ({
                    score: state.score + (state.scoreIncrement * state.multiplier),
                    multiplier: state.multiplier * state.multiplierIncrement,
                }))
                this.setEndGame(true);
            }
        } else {
            this.setEndGame(false);
        }
    }
    voltaireClick() {
        if (!this.state.filosofos[0].canUse) return;
        this.audio.play();
        var changeThis = this.state.currentQuestion;
        var filosofos = this.state.filosofos;
        filosofos[0].corretas = changeThis.voltaire;
        console.log(changeThis);
        filosofos[0].canUse = false;
        this.state.filosofos[0].corretas.map((item, index) => {
            changeThis.alternativas[item].rMark = true;
        })
        this.setState(state => ({
            ...state,
            currentQuestion: changeThis,
            filosofos: filosofos
        }));
    }
    lockeClick() {
        if (!this.state.filosofos[1].canUse) return;
        this.audio.play();
        var changeThis = this.state.currentQuestion;
        var filosofos = this.state.filosofos;
        filosofos[1].corretas = changeThis.locke;
        console.log(changeThis);
        filosofos[1].canUse = false;
        this.state.filosofos[1].corretas.map((item, index) => {
            changeThis.alternativas[item].rMark = true;
        })
        this.setState(state => ({
            ...state,
            currentQuestion: changeThis,
            filosofos: filosofos
        }));
    }
    montesClick() {
        if (!this.state.filosofos[2].canUse) return;
        this.audio.play();
        var changeThis = this.state.currentQuestion;
        var filosofos = this.state.filosofos;
        filosofos[2].corretas = changeThis.montesquieu;
        console.log(changeThis);
        filosofos[2].canUse = false;
        this.state.filosofos[2].corretas.map((item, index) => {
            changeThis.alternativas[item].rMark = true;
        })
        this.setState(state => ({
            ...state,
            currentQuestion: changeThis,
            filosofos: filosofos
        }));
    }
    rouClick() {
        if (!this.state.filosofos[3].canUse) return;
        this.audio.play();
        var changeThis = this.state.currentQuestion;
        var filosofos = this.state.filosofos;
        filosofos[3].erradas = changeThis.rousseau;
        console.log(changeThis);
        filosofos[3].canUse = false;
        this.state.filosofos[3].erradas.map((item, index) => {
            changeThis.alternativas[item].wMark = true;
        })
        this.setState(state => ({
            ...state,
            currentQuestion: changeThis,
            filosofos: filosofos
        }));
    }
    maqClick() {
        if (!this.state.filosofos[4].canUse) return;
        this.audio.play();
        var changeThis = this.state.currentQuestion;
        var filosofos = this.state.filosofos;
        filosofos[4].erradas = changeThis.maquiavel;
        console.log(changeThis);
        filosofos[4].canUse = false;
        this.state.filosofos[4].erradas.map((item, index) => {
            changeThis.alternativas[item].wMark = true;
        })
        this.setState(state => ({
            ...state,
            currentQuestion: changeThis,
            filosofos: filosofos
        }));
    }
    handleExit() {
        this.audio.play();
        app.quit();
    }
    componentDidMount() {
        var stillAlive = new Audio(stillLive);
        var shaperr = new Audio(shaper);
        var abyss = new Audio(abyssLich);
        var theAscn = new Audio(ascent);
        var blocks = new Audio(control);
        var theAque = new Audio(aqueduct);

        shaperr.volume = 0.5;
        stillAlive.volume = 0.5;
        abyss.volume = 0.5;
        theAscn.volume = 0.5;
        blocks.volume = 0.5;
        theAque.volume = 0.5;

        stillAlive.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            abyss.play();
        })
        abyss.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            shaperr.play();
        })
        shaperr.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            theAscn.play();
        })
        theAscn.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            blocks.play();
        })
        blocks.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            theAque.play();
        })
        theAque.addEventListener('ended', function () {
            this.currentTime = 0;
            this.pause();
            stillAlive.play();
        })
        shaperr.play();
        this.setState(state => ({
            ...state,
            shaperr,
            abyss,
            stillAlive,
            theAscn,
            blocks,
            theAque
        }))
    }

    render() {
        if (!this.state.gameOver)
            return (
                <div className='jogo'>
                    <p>Pontuação: {Math.floor(this.state.score)}</p>
                    <div className='perguntas'>
                        <h1 >Questão {this.state.currentNumber}: </h1>
                        <p>{this.state.currentQuestion.questao}</p>
                    </div>
                    <div className='alternativas'>
                        {this.state.currentQuestion.alternativas.map((item, index) => {
                            return (
                                <div id={item.rMark ? 'certo' : item.wMark ? 'errado' : 'normal'} className='alternativa' key={index}
                                    onClick={() => this.handleQuestionClick(index)}>
                                    {index + 1}: {item.alternativa}
                                </div>
                            )
                        })}
                    </div>

                    <div className='filosofos'>
                        <span style={{
                            fontSize: '16px'
                        }}>ajudas:</span>
                        <div className='filosofo' onClick={this.voltaireClick}>

                            <img style={{
                                maxWidth: '75px',
                            }} src={this.state.filosofos[0].canUse ? this.state.filosofos[0].img : this.state.filosofos[0].used} />
                            {this.state.filosofos[0].nome}
                        </div>
                        <div className='filosofo' onClick={this.lockeClick}>

                            <img style={{
                                maxWidth: '75px',
                            }} src={this.state.filosofos[1].canUse ? this.state.filosofos[1].img : this.state.filosofos[1].used} />
                            {this.state.filosofos[1].nome}
                        </div>
                        <div className='filosofo' onClick={this.montesClick}>

                            <img style={{
                                maxWidth: '75px',
                            }} src={this.state.filosofos[2].canUse ? this.state.filosofos[2].img : this.state.filosofos[2].used} />
                            {this.state.filosofos[2].nome}
                        </div>
                        <div className='filosofo' onClick={this.rouClick}>

                            <img style={{
                                maxWidth: '75px',
                            }} src={this.state.filosofos[3].canUse ? this.state.filosofos[3].img : this.state.filosofos[3].used} />
                            {this.state.filosofos[3].nome}
                        </div>
                        <div className='filosofo' onClick={this.maqClick}>

                            <img style={{
                                maxWidth: '75px',
                            }} src={this.state.filosofos[4].canUse ? this.state.filosofos[4].img : this.state.filosofos[4].used} />
                            {this.state.filosofos[4].nome}
                        </div>
                    </div>
                </div>
            )
        else
            return (
                <div className='endGame'>
                    {/* {this.state.win ? `VOCÊ VENCEU!  : `VOCÊ PERDEU! PONTUAÇÃO FINAL: ${Math.floor(this.state.score)}`} */}
                    {this.state.win ? 'VOCÊ VENCEU' : 'VOCÊ PERDEU'} <br />
                    PONTUAÇÃO FINAL: {Math.floor(this.state.score)}<br /><br />
                    <div id='exit' onClick={this.handleExit}>Sair</div>
                </div>
            )
    }
}