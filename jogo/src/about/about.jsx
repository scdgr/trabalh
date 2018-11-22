import React from 'react';
const { app } = window.require('electron').remote;
import '../game2/game.css'
export default class About extends React.Component {
    handleExit() {
        app.quit();
    }
    render() {
        return (
            <div style={{
                backgroundColor: 'rgb(17, 15, 15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                fontFamily: '\'Roboto\', sans-serif',
                color: '#fff',
                textAlign: 'center',
                userSelect: 'none'
            }}
            >
            <span style={{fontSize: '24px'}}>Créditos:</span> <br />
            <br />Desenvolvedores:<br />
            Paulo Victor, <br />Marcos Paulo, <br />Henrique Garcia, <br />Alexandre Júnior, <br />Lucas Licbmam<br />
            <br />Referências:<br />
            BrasilEscola, SparkNotes, Wikipedia
            <br /><br />Músicas: <br />
            Kamil Orman-Janowski<br /><br />
            Ilustrações/Design:<br />
            Yuri Almeida<br /><br />
            Agradecimentos Especiais:<br />
            Izaias Vinicius,<br /> Victor Hugo

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div onClick={this.handleExit}><span id='exit' style={{fontSize: '42px'}}>Sair</span></div>
            </div>
        )
    }
}