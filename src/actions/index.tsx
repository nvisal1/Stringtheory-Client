import { LOGIN, LOGIN_REQUEST, REFRESH } from './constants';
import server from '../shared/server';
import { LoginParams, UserInfo } from '../shared/interfaces';
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
            type: LOGIN_REQUEST,
        });
        const response = await server.post('/login', params);

        const tokenData: TokenData = decode(response.data.Token);
        sessionStorage.setItem('Token', response.data.Token);
        dispatch({
            type: LOGIN,
            userInfo: tokenData.user,
        });
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


