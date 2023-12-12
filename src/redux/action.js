export const ADD_TOKEN_DATA = 'ADD_TOKEN_DATA'
export const SELECTED_TOKEN = 'SELECTED_TOKEN'

export const addTokenData  = (item) => ({
    type: 'ADD_TOKEN_DATA',
    payload: item
})

export const selectedToken = (item) => ({
    type: 'SELECTED_TOKEN',
    payload: item
})