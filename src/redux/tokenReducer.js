import { ADD_TOKEN_DATA, SELECTED_TOKEN } from "./action";

const initalState = {
    tokenData: {},
    selectedToken: {}
}

const tokenReducer = (state=initalState, action) => {
    switch(action.type){
        case ADD_TOKEN_DATA:
            return {...state, tokenData: action.payload}
        case SELECTED_TOKEN:
            return {...state, selectedToken: action.payload}
        default:
            return state
    }
}

export default tokenReducer;