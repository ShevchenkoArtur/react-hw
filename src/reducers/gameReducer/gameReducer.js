import {gameParams} from '../../constants';
import {
    ADD_TO_HISTORY,
    CHANGE_FIRST_SIGN_TURN, GIVE_UP, RESET_INPUTS, RESET_NICKNAMES, SAVE_NICKNAMES,
    SET_WINNER, START_NEW_GAME, TOGGLE_MODAL_OPENER,
    TOGGLE_START_GAME, UPDATE_INPUTS, UPDATE_STEP_HISTORY
} from './gameActions';

export const initialState = {
    isGameStarted: false,
    winner: null,
    modalIsOpen: false,

    history: [
        {
            isXTurn: true,
            squares: new Array(Math.pow(gameParams.size, 2)).fill(null)
        }
    ],

    players: {
        nicknames: {
            firstPlayerName: '',
            secondPlayerName: '',
        }
    },

    inputValues: {
        firstPlayerName: '',
        secondPlayerName: '',
    }
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [
                    ...state.history,
                    {
                        ...action.payload,
                        isXTurn: !state.history[state.history.length - 1].isXTurn
                    }
                ],
            }
        case TOGGLE_START_GAME:
            return {
                ...state,
                isGameStarted: action.payload.bool
            }
        case CHANGE_FIRST_SIGN_TURN:
            if (action.payload.value === 'o') {
                return {
                    ...state,
                    history: state.history.map(el => {
                        return {
                            ...el,
                            isXTurn: false
                        }
                    })
                }
            } else {
                return {
                    ...state,
                    history: state.history.map(el => {
                        return {
                            ...el,
                            isXTurn: true
                        }
                    })
                }
            }
        case SET_WINNER:
            return {
                ...state,
                winner: action.payload.winner
            }
        case UPDATE_STEP_HISTORY:
            return {
                ...state,
                winner: null,
                history: state.history.filter((el, idx) => idx <= action.payload.index)
            }
        case START_NEW_GAME:
            return {
                ...state,
                isGameStarted: false,
                winner: null,
                history: [
                    {
                        isXTurn: true,
                        squares: new Array(Math.pow(gameParams.size, 2)).fill(null)
                    }
                ],
            }
        case TOGGLE_MODAL_OPENER:
            return {
                ...state,
                modalIsOpen: !state.modalIsOpen
            }
        case UPDATE_INPUTS:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    [action.payload.inputName]: action.payload.newValue
                }
            }
        case RESET_INPUTS:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    firstPlayerName: '',
                    secondPlayerName: ''
                }
            }
        case SAVE_NICKNAMES:
            return {
                ...state,
                players: {
                    ...state.players,
                    nicknames: {
                        ...state.players.nicknames,
                        firstPlayerName: state.inputValues.firstPlayerName,
                        secondPlayerName: state.inputValues.secondPlayerName
                    }
                }
            }
        case RESET_NICKNAMES:
            return {
                ...state,
                players: {
                    ...state.players,
                    nicknames: {
                        ...state.players.nicknames,
                        firstPlayerName: '',
                        secondPlayerName: ''
                    }
                }
            }
        case GIVE_UP:
            const currentStep = state.history[state.history.length - 1]
            let winner = null
            currentStep.isXTurn ? winner = 'O' : winner = 'X'
            return {
                ...state,
                winner: winner,
                isGameStarted: false
            }
        default:
            return state
    }
}
