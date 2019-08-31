import { UserInfo } from '../../shared/interfaces';
import { AuthState } from './types';

export function login({
    userInfo
}: {
    userInfo: UserInfo
}): AuthState {
    return {
      isLoggedIn: true,
      isLoading: false,
      userInfo,      
    }
}

