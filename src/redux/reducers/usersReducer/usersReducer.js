import {
    ADD_COMPETITION,
    ADD_USER,
    CREATE_NEW_USER, DELETE_USER, GET_COMPETITIONS,
    GET_USERS, GET_WINNER, RESET_TIMER, SEARCH_COMPETITIONS,
    SEARCH_USERS, START_TIMER, STOP_TIMER,
    TOGGLE_SHOW_TIMER,
    UPDATE_REGISTER_INPUT_VALUES, UPDATE_TEMP_TIME
} from './actions';
import {calculateWinner, convertString, getId} from '../../../utils';

const initialState = {
    users: {},
    competitions: [],
    competitionsFiltered: [],
    searchCompetitionsValue: '',
    searchUsersValue: '',
    showTimer: false,
    winners: {},

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
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            if (!state.users[action.payload.arrName]?.length) {
                return {
                    ...state,
                    users: {
                        ...state.users,
                        [action.payload.arrName]: action.payload.arr,
                        [action.payload.arrName + 'Filtered']: action.payload.arr
                    }
                }
            }
            return state
        case SEARCH_USERS: {
            const value = action.payload.newValue
            const arrName = action.payload.arrName
            if (value) {
                return {
                    ...state,
                    searchUsersValue: value,
                    users: {
                        ...state.users,
                        [arrName + 'Filtered']: state.users[arrName + 'Filtered'].filter(
                            el => convertString(el.name).includes(convertString(value)) ||
                                convertString(el.id).includes(convertString(value))
                        )
                    }
                }
            } else {
                return {
                    ...state,
                    searchUsersValue: value,
                    users: {
                        ...state.users,
                        [arrName + 'Filtered']: state.users[arrName]
                    }
                }
            }
        }
        case ADD_USER:
            return {
                ...state,
                showTimer: false,
                users: {
                    [action.payload.arrName]: [
                        ...state.users[action.payload.arrName],
                        {...state.newUser, time: state.timer.tempTime}
                    ],
                    [action.payload.arrName + 'Filtered']: [
                        ...state.users[action.payload.arrName + 'Filtered'],
                        {...state.newUser, time: state.timer.tempTime}
                    ]
                },
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
                users: {
                    ...state.users,
                    [action.payload.arrName + 'Filtered']: state.users[action.payload.arrName + 'Filtered'].filter(
                        el => el.id !== action.payload.id),
                    [action.payload.arrName]: state.users[action.payload.arrName].filter(
                        el => el.id !== action.payload.id)
                }
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
            if(state.users[action.payload.arrName].length) {
                return {
                    ...state,
                    winners: {
                        ...state.winners,
                        [action.payload.arrName]: {
                            ...state.winners[action.payload.arrName],
                            isWinner: true,
                            winner: calculateWinner(state.users[action.payload.arrName])
                        }
                    }
                }
            }
            return state
        case GET_COMPETITIONS:
            if (!state.competitions?.length) {
                return {
                    ...state,
                    competitions: action.payload.competitions,
                    competitionsFiltered: action.payload.competitions
                }
            }
            return state
        case SEARCH_COMPETITIONS: {
            const value = action.payload.newValue
            if (value) {
                return {
                    ...state,
                    searchCompetitionsValue: value,
                    competitionsFiltered: state.competitionsFiltered.filter(
                        el => convertString(el.name).includes(convertString(value)))
                }
            } else {
                return {
                    ...state,
                    searchCompetitionsValue: value,
                    competitionsFiltered: state.competitions
                }
            }
        }
        case ADD_COMPETITION:
            return {
                ...state,
                competitions: [...state.competitions, {id: getId(), name: action.payload.newValue}],
                competitionsFiltered: [...state.competitions, {id: getId(), name: action.payload.newValue}],
            }
        default:
            return state
    }
}

export default usersReducer;
