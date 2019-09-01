import { LOGIN, REQUEST, SET_AUTH_ERROR, REGISTER } from './constants';
import server from '../shared/server';
import { LoginParams, UserInfo, RegisterParams } from '../shared/interfaces';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import decode from 'jwt-decode';

interface TokenData {
    user: UserInfo;
}

export function login(
    params: LoginParams
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function (dispatch) {
        dispatch({
            type: REQUEST,
        });
        try {
            const response = await server.post('/login', params);
            const tokenData: TokenData = decode(response.data.Token);
            sessionStorage.setItem('Token', response.data.Token);
            dispatch({
                type: LOGIN,
                userInfo: tokenData.user,
            });
        } catch(error) {
            let message = 'An error occured';
            if (error.response.status === 401) {
                message = 'Username or Password is incorrect';
            }
            dispatch({
                type: SET_AUTH_ERROR,
                error: message,
            });
        }
    }
}

export function register(
    params: RegisterParams
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function (dispatch) {
        dispatch({
            type: REQUEST,
        });
        try {
            const response = await server.post('/register', params);
            const tokenData: TokenData = decode(response.data.Token);
            sessionStorage.setItem('Token', response.data.Token);
            dispatch({
                type: REGISTER,
                userInfo: tokenData.user,
            });
        } catch(error) {
            let message = 'An error occured';
            if (error.response.status === 401) {
                message = 'Username or Password is incorrect';
            }
            dispatch({
                type: SET_AUTH_ERROR,
                error: message,
            });
        }
    }
}

export function mapDispatchToProps(dispatch: any){
  return {
  	 loadUserFromToken: () => {
  	 	let token = sessionStorage.getItem('Token');
  	 	if(!token || token === '') {
  	 		return;
  	 	}
        const tokenData: TokenData = decode(token);
        dispatch({
            type: LOGIN,
            userInfo:  tokenData.user,
        });
  	 },
  }
}


