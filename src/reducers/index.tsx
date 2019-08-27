import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './auth';

export default combineReducers({
    form: formReducer,
    auth: userReducer,
    courses: courseReducer,
    errors:  errorReducer,
});