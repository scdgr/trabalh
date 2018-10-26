import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Game from '../game/game'



export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Game} />
        <Redirect from='*' to='/' />
    </Router>
)