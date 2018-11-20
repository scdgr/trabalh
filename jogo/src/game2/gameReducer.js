const INITIAL_STATE = {
    rooms: [],
    roomInput: ''
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'KASDASDJASDKJ':
            return { ...state, description: action.payload };
            break;
        default:
            return state;
    }
}