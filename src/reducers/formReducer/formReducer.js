import {CHANGE_STEP, TOGGLE_THEME, UPDATE_INPUTS,} from './formAction';

export const initialState = {
    step: 1,

    userData: {
        firstName: '',
        lastName: '',
        email: '',
        town: '',
        street: '',
        house: '',
        image: {
            file: '',
            imagePreview: ''
        },
        password: '',
        confirmedPassword: ''
    },

    isDarkTheme: false,
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STEP:
            return {
                ...state,
                step: action.payload.newValue
            }
        case UPDATE_INPUTS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.payload.inputName]: action.payload.newValue
                }
            }
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            }
        default:
            return state
    }
}

export default formReducer