import {
    ADD_USER,
    CREATE_NEW_USER, DELETE_USER,
    GET_USERS, GET_WINNER, RESET_TIMER,
    SEARCH_USERS, START_TIMER, STOP_TIMER,
    TOGGLE_SHOW_TIMER,
    UPDATE_REGISTER_INPUT_VALUES, UPDATE_TEMP_TIME
} from './actions';
import {calculateWinner, convertString, getId} from '../../../utils';

const initialState = {
    users: [],
    filteredUsers: [],
    searchValue: '',
    showTimer: false,

    registerInputValues: {
        firstName: '',
        secondName: ''
    },

    newUser: {
        id: '',
        name: '',
        time: ''
    },

    timer: {
        time: new Date(),
        tempTime: '00:00:00',
        offset: 0,
        started: false,

        btnTimerStatus: {
            start: false,
            stop: true,
            reset: true,
            cancel: false,
            save: true,
        }
    },

    isWinner: false,
    winner: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload.users,
                filteredUsers: action.payload.users
            }
        case SEARCH_USERS:
            const value = action.payload.newValue
            if (value) {
                return {
                    ...state,
                    searchValue: value,
                    filteredUsers: state.users.filter(
                        el => convertString(el.name).includes(convertString(value)) ||
                            convertString(el.id).includes(convertString(value))
                    )
                }
            } else {
                return {
                    ...state,
                    searchValue: action.payload.newValue,
                    filteredUsers: state.users
                }
            }
        case ADD_USER:
            return {
                ...state,
                showTimer: false,
                users: [...state.users, {...state.newUser, time: state.timer.tempTime}],
                filteredUsers: [...state.users, {...state.newUser, time: state.timer.tempTime}],
                timer: {
                    ...state.timer,
                    offset: 0,
                    tempTime: '00:00:00',
                    btnTimerStatus: {
                        ...state.timer.btnTimerStatus,
                        start: false,
                        reset: true,
                        save: true
                    }
                }
            }
        case DELETE_USER:
            return {
                ...state,
                filteredUsers: state.filteredUsers.filter(el => el.id !== action.payload.id),
                users: state.users.filter(el => el.id !== action.payload.id),
            }
        case TOGGLE_SHOW_TIMER:
            return {
                ...state,
                showTimer: !state.showTimer
            }
        case UPDATE_REGISTER_INPUT_VALUES:
            return {
                ...state,
                registerInputValues: {
                    ...state.registerInputValues,
                    firstName: action.payload.newValue.firstName,
                    secondName: action.payload.newValue.secondName
                }
            }
        case CREATE_NEW_USER:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    id: getId(),
                    name: `${state.registerInputValues.firstName} ${state.registerInputValues.secondName}`,
                    time: ''
                }
            }
        case UPDATE_TEMP_TIME:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    tempTime: action.payload.newValue
                }
            }
        case START_TIMER:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    started: true,
                    time: new Date(),
                    btnTimerStatus: {
                        ...state.timer.btnTimerStatus,
                        start: true,
                        stop: false
                    }
                }
            }
        case STOP_TIMER:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    started: false,
                    offset: new Date().getTime() - state.timer.time.getTime(),
                    btnTimerStatus: {
                        ...state.timer.btnTimerStatus,
                        stop: true,
                        reset: false,
                        save: false
                    }
                }
            }
        case RESET_TIMER:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    started: false,
                    time: new Date(),
                    offset: 0,
                    tempTime: '00:00:00',
                    btnTimerStatus: {
                        ...state.timer.btnTimerStatus,
                        start: false,
                        reset: true,
                        save: true
                    }
                }
            }
        case GET_WINNER:
            return {
                ...state,
                isWinner: true,
                winner: calculateWinner(state.users)
            }
        default:
            return state
    }
}

export default usersReducer;
