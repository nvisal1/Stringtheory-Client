import { 
    LOGIN, LOGIN_REQUEST,
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
    }
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
            })
        default: 
            return state;
    }
};