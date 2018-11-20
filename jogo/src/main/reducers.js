import { combineReducers } from 'redux'
import gameReducer from '../game2/gameReducer';

const rootReducer = combineReducers ({ 
    game: gameReducer,
})

export default rootReducer;