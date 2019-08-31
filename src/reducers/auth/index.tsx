import { 
    LOGIN, LOGIN_REQUEST, SET_AUTH_ERROR,
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
        case LOGIN_REQUEST:
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