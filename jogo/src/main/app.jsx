import './style.css'
import React from 'react'
import Routes from './routes'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (<div className='container'>
            <Routes />
        </div>)
    }
}

export default DragDropContext(HTML5Backend)(App);