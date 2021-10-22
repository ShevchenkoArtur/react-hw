import {combineReducers} from 'redux';
import usersReducer from './usersReducer/usersReducer';

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;