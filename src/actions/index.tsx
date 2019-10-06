import { LOGIN, REQUEST, SET_AUTH_ERROR, REGISTER, LOAD_COURSES_REQUEST, SET_COURSES, SET_COURSE_ERROR, LOGOUT, SELECT_EXERCISE } from './constants';
import server from '../shared/server';
import { LoginParams, UserInfo, RegisterParams, Exercise } from '../shared/interfaces';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import decode from 'jwt-decode';
import history from '../history';

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
            if (response.status === 200) {
                history.push('/curriculum');
            }
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
            if (response.status === 200) {
                history.push('/curriculum');
            }
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

export function logout(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function(dispatch) {
        sessionStorage.removeItem('Token');
        dispatch({
            type: LOGOUT,
        });
    }
}

export function loadCourses(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function (dispatch) {
        dispatch({
            type: LOAD_COURSES_REQUEST,
        });
        try {
            const response = await server.get('/courses');
            const courses = response.data;
            dispatch({
                type: SET_COURSES,
                courses,
            });
        } catch(error) {
            dispatch({
                type: SET_COURSE_ERROR,
                error: 'Courses could not be loaded at this time. Please try again later.',
            });
        }
    }
}

export function selectExercise(exercise: Exercise): ThunkAction<Promise<void>, {}, {}, AnyAction> {
    return async function(dispatch) {
        localStorage.setItem('SelectedExercise', JSON.stringify(exercise));
        dispatch({
            type: SELECT_EXERCISE,
            exercise,
        });
        history.push('/exercise');
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


