export const CHANGE_STEP = 'CHANGE_STEP'
export const UPDATE_INPUTS = 'UPDATE_INPUTS'
export const TOGGLE_THEME = 'TOGGLE_THEME'

export const changeStep = (newValue) => ({type: CHANGE_STEP, payload: {newValue}})
export const updateInputs = (inputName, newValue) => ({type: UPDATE_INPUTS, payload: {inputName, newValue}})
export const toggleTheme = () => ({type: TOGGLE_THEME})