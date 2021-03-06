import React from 'react'
import { Router, Route, Redirect, hashHistory, } from 'react-router'

import Game from '../game2/game'
import Menu from '../menu/menu'
import About from '../about/about'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Menu} />
        <Route path='/game' component={Game} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Router>
)