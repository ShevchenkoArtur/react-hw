export const GET_USERS = 'GET_USERS'
export const SEARCH_USERS = 'SEARCH_USERS'
export const TOGGLE_SHOW_TIMER = 'TOGGLE_SHOW_TIMER'
export const UPDATE_REGISTER_INPUT_VALUES = 'UPDATE_REGISTER_INPUT_VALUES'
export const CREATE_NEW_USER = 'CREATE_NEW_USER'
export const UPDATE_TEMP_TIME = 'UPDATE_TEMP_TIME'
export const ADD_USER = 'ADD_USER'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const RESET_TIMER = 'RESET_TIMER'
export const DELETE_USER = 'DELETE_USER'
export const GET_WINNER = 'GET_WINNER'

export const getUsers = (users) => ({type: GET_USERS, payload: {users}})
export const searchUsers = (newValue) => ({type: SEARCH_USERS, payload: {newValue}})
export const toggleShowTimer = () => ({type: TOGGLE_SHOW_TIMER})
export const updateRegisterInputValues = (newValue) => ({type: UPDATE_REGISTER_INPUT_VALUES, payload: {newValue}})
export const createNewUser = () => ({type: CREATE_NEW_USER})
export const updateTempTime = (newValue) => ({type: UPDATE_TEMP_TIME, payload: {newValue}})
export const addUser = () => ({type: ADD_USER})
export const startTimer = () => ({type: START_TIMER})
export const stopTimer = () => ({type: STOP_TIMER})
export const resetTimer = () => ({type: RESET_TIMER})
export const deleteUser = (id) => ({type: DELETE_USER, payload: {id}})
export const getWinner = () => ({type: GET_WINNER})
