export const ADD_TO_HISTORY = 'ADD_TO_HISTORY'
export const TOGGLE_START_GAME = 'TOGGLE_START_GAME'
export const CHANGE_FIRST_SIGN_TURN = 'CHANGE_FIRST_SIGN_TURN'
export const SET_WINNER = 'SET_WINNER'
export const UPDATE_STEP_HISTORY = 'UPDATE_STEP_HISTORY'
export const START_NEW_GAME = 'START_NEW_GAME'
export const TOGGLE_MODAL_OPENER = 'TOGGLE_MODAL_OPENER'
export const UPDATE_INPUTS = 'UPDATE_INPUTS'
export const RESET_INPUTS = 'RESET_INPUTS'
export const SAVE_NICKNAMES = 'SAVE_NICKNAMES'
export const RESET_NICKNAMES = 'RESET_NICKNAMES'
export const GIVE_UP = 'GIVE_UP'
export const ADD_WINNER_TO_HISTORY = 'ADD_WINNER_TO_HISTORY'

export const addToHistory = (squares) => ({type: ADD_TO_HISTORY, payload: {squares}})
export const toggleStartGame = (bool) => ({type: TOGGLE_START_GAME, payload: {bool}})
export const changeFirstSignTurn = (value) => ({type: CHANGE_FIRST_SIGN_TURN, payload: {value}})
export const setWinner = (winner) => ({type: SET_WINNER, payload: {winner}})
export const updateStepHistory = (index) => ({type: UPDATE_STEP_HISTORY, payload: {index}})
export const startNewGame = () => ({type: START_NEW_GAME})
export const toggleModalOpener = () => ({type: TOGGLE_MODAL_OPENER})
export const updateInputs = (inputName, newValue) => ({type: UPDATE_INPUTS, payload: {inputName, newValue}})
export const resetInputs = () => ({type: RESET_INPUTS})
export const saveNicknames = () => ({type: SAVE_NICKNAMES})
export const resetNicknames = () => ({type: RESET_NICKNAMES})
export const giveUp = () => ({type: GIVE_UP})
export const addWinnerToHistory = (date) => ({type: ADD_WINNER_TO_HISTORY, payload: {date}})


