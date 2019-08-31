import { LOGIN, LOGIN_REQUEST } from './constants';
import server from '../shared/server';
import { LoginParams } from '../shared/interfaces';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import decode from 'jwt-decode';

export function login(
    params: LoginParams
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        });
        const response = await server.post('/login', params);

        const userInfo = decode(response.data.Token);
        dispatch({
            type: LOGIN,
            userInfo,
        });
    }
}

// export function login(LoginParams: LoginParams) {
//     return {
//         type: LOGIN,
//     }
// }