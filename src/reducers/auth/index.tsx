import { 
    LOGIN, REQUEST, SET_AUTH_ERROR, REGISTER,
} from '../../actions/constants';
import {
    login,
} from './login';
import { AuthState } from './types';

const INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    isLoading: false,
    userInfo: {
        Username: '',
        Name: '',
        Email: '',
    },
    error: '',
};  

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case LOGIN: 
            return login({
                userInfo: action.userInfo,
            });
        case REGISTER:
            return ({
                isLoggedIn: true,
                isLoading: false,
                userInfo: action.userInfo,
                error: '',
            });
        case REQUEST:
            return({
                ...state,
                isLoading: true,
            });
        case SET_AUTH_ERROR:
            return({
                ...state,
                isLoading: false,
                error: action.error,
            });
        default: 
            return state;
    }
};