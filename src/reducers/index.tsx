import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './auth';
import courseReducer from './courses';

export default combineReducers({
    form: formReducer,
    auth: userReducer,
    courses: courseReducer,
    // errors:  errorReducer,
});