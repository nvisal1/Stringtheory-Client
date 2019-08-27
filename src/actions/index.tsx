import { LOGIN } from './constants';
import server from '../shared/server';
import { LoginParams } from '../shared/interfaces';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export function login(
    params: LoginParams
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function (dispatch) {
        const response = await server.post('/login', params);
        // check response code 
        // decode the token
        dispatch({
            type: LOGIN,
            token: response.data,
        });
    }
}