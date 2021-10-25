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
export const GET_COMPETITIONS = 'GET_COMPETITIONS'
export const SEARCH_COMPETITIONS = 'SEARCH_COMPETITIONS'
export const ADD_COMPETITION = 'ADD_COMPETITION'

export const getUsers = (arrName, arr) => ({type: GET_USERS, payload: {arrName, arr}})
export const searchUsers = (arrName, newValue) => ({type: SEARCH_USERS, payload: {arrName, newValue}})
export const toggleShowTimer = () => ({type: TOGGLE_SHOW_TIMER})
export const updateRegisterInputValues = (newValue) => ({type: UPDATE_REGISTER_INPUT_VALUES, payload: {newValue}})
export const createNewUser = () => ({type: CREATE_NEW_USER})
export const updateTempTime = (newValue) => ({type: UPDATE_TEMP_TIME, payload: {newValue}})
export const addUser = (arrName) => ({type: ADD_USER, payload: {arrName}})
export const startTimer = () => ({type: START_TIMER})
export const stopTimer = () => ({type: STOP_TIMER})
export const resetTimer = () => ({type: RESET_TIMER})
export const deleteUser = (arrName, id) => ({type: DELETE_USER, payload: {arrName, id}})
export const getWinner = (arrName) => ({type: GET_WINNER, payload: {arrName}})
export const getCompetitions = (competitions) => ({type: GET_COMPETITIONS, payload: {competitions}})
export const searchCompetitions = (newValue) => ({type: SEARCH_COMPETITIONS, payload: {newValue}})
export const addCompetition = (newValue) => ({type: ADD_COMPETITION, payload: {newValue}})
