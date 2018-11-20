import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Game from '../game2/game'
import Menu from '../menu/menu'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Menu} />
        <Route path='/game' componen={Game} />
        <Redirect from='*' to='/' />
    </Router>
)