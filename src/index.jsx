import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import { observe } from './Game';

const rootEl = document.getElementById('app');

observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition={knightPosition} />,
        rootEl
    )
);
