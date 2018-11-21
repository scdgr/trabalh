import './style.css'
import React from 'react'
import Routes from './routes'


export default class App extends React.PureComponent {
    constructor(props) {
        super();
    }
    render() {
        return (<div className='container'>
            <Routes />
        </div>)
    }
}
