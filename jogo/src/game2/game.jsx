import React from 'react'


import './game.css'



import abyssLich from '../sountrack/02. Abyssal Lich.mp3';
import shaper from '../sountrack/02. Shapers Realm.mp3';
import stillLive from '../sountrack/Still Alive.mp3';

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


const perguntas = [
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    },
    {
        questao: 'askdjaskdjajkdasdfkjasdfdlasfkljasfkljadfskasjfasdfkljasdfkldlasdfkljadsfkljkajsd',
        alternativas: ['asdf', 'asdf', 'asdf', 'akjdasf', 'afdlk'],
        correto: 2,
        locke: 2,
        voltaire: [2, 4],
        montesquieu: [0, 2, 4],
        maquiavel: [0, 3, 4],
        rousseau: [0, 4]
    }
]


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        var currentQuestion = perguntas.splice(Math.floor(Math.random * perguntas.length), 1)[0];
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
    }
    setEndGame(win) {
        console.log(this.state);
        this.state.shaperr.pause();
        this.state.stillAlive.pause();
        this.state.abyss.pause();
        this.setState(state => ({
            ...state,
            gameOver: true,
            win: win
        }))
    }

    handleQuestionClick(index) {
        // console.log(index);
        if(index === this.state.currentQuestion.correto) { 
            // console.log('acertou');
            if(perguntas.length > 0) {
                this.setState(state => ({
                    currentNumber: state.currentNumber + 1,
                    score: state.score + (state.scoreIncrement * state.multiplier),
                    multiplier: state.multiplier * state.multiplierIncrement,
                    currentQuestion: perguntas.splice(Math.floor(Math.random * perguntas.length), 1)[0]
                }))
            } else {
                this.setEndGame(true);
            }
        } else {
            this.setEndGame(false);
        }
    }
    componentDidMount() {
        var stillAlive = new Audio(stillLive);
        var shaperr = new Audio(shaper);
        var abyss = new Audio(abyssLich);
        shaperr.volume = 0.5;
        stillAlive.volume = 0.5;
        abyss.volume = 0.5;

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
            stillAlive.play();
        })
        shaperr.play();
        this.setState(state => ({
            ...state,
            shaperr,
            abyss,
            stillAlive
        }))
    }

    render() {
        if(!this.state.gameOver)
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
                            <div className='alternativa' key={index}
                            onClick = {() => this.handleQuestionClick(index)}>
                                {index+1}: {item}
                            </div>
                        )
                    })}
                </div>
                <div className='filosofos'>
                    {this.state.filosofos.map((item, index) => {
                        return (
                            <div className='filosofo' key={index}>
                            
                            <img style={{
                                maxWidth: '75px',
                            }}src={item.canUse ? item.img : item.used} />
                            {item.nome}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
        else 
        return (
            <div className='endGame'>
                {this.state.win ? (`VOCÊ VENCEU! PONTUAÇÃO FINAL: ${Math.floor(this.state.score)}`) : `VOCÊ PERDEU!\n PONTUAÇÃO FINAL: ${Math.floor(this.state.score)}`}
            </div>
        )
    }
}