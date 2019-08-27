import { UserInfo } from '../../shared/interfaces';
import { AuthState } from './types';

export function login({
    state,
    userInfo
}: {
    state: AuthState,
    userInfo: UserInfo
}) {
    return {
      isLoggedIn: true,
      userInfo,      
    }
}

