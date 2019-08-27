import { 
    LOGIN,
} from '../../actions/constants';
import {
    login,
} from './login';
import { AuthState } from './types';
import { Login } from '../../actions/interfaces';

const INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    userInfo: {
        username: '',
    }
};  

export default (state = INITIAL_STATE, action: Login) => {
    switch (action.type) {
        case LOGIN: 
            return login({
                state,
                userInfo: action.userInfo,
            });
        default: 
            return state;
    }
};