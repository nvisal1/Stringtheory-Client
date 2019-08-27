import * as types from './types';
import { UserInfo } from '../shared/interfaces';

export interface LoadCourses {
    type: types.LOAD_COURSES;
}

export interface Register {
    type: types.REGISTER;
}

export interface Login {
    type: types.LOGIN;
    userInfo: UserInfo;
}

export interface Logout {
    type: types.LOGOUT;
}

export interface SetError {
    type: types.SET_ERROR;
}